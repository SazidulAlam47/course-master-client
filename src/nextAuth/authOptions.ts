import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';
import verifyPassword from '@/utils/verifyPassword';
import { findUserByEmail } from '@/services/authServices';

const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
            allowDangerousEmailAccountLinking: true,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and Password is required');
                }

                const user = await findUserByEmail(credentials.email);
                if (!user) {
                    throw new Error('This email is not registered');
                }

                if (!user.password) {
                    throw new Error(
                        'Password not set for this account. Please log in using Google'
                    );
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );
                if (!isValid) {
                    throw new Error('Wrong password');
                }

                return {
                    id: user._id.toString(),
                    ...user,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.role = user.role || 'student';
                token.hasPassword = !!user?.password;
                token.needPasswordChange = user?.needPasswordChange || false;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token && session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.hasPassword = token.hasPassword;
                session.user.needPasswordChange = token.needPasswordChange;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
