import { DefaultSession } from 'next-auth';

type AuthExtension = {
    id: string;
    role?: string;
    hasPassword?: boolean;
    needPasswordChange?: boolean;
};

type UserExtension = AuthExtension & {
    password?: string;
};

declare module 'next-auth' {
    interface Session {
        user: AuthExtension & DefaultSession['user'];
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends UserExtension {}
}

declare module 'next-auth/jwt' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface JWT extends AuthExtension {}
}
