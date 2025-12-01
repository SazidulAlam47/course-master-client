import { NextRequest, NextResponse } from 'next/server';
import { TDecodedUser } from './types';
import { getToken, JWT } from 'next-auth/jwt';

const AuthRoutes = ['/login', '/register', '/forgot-password'];
const commonPrivateRoutes = [
    '/dashboard',
    '/dashboard/profile',
    '/dashboard/profile/edit',
    '/dashboard/change-password',
    '/dashboard/set-password',
];
const roleBasedPrivateRoutes = {
    student: [/^\/dashboard\/student/],
    admin: [/^\/dashboard\/admin/],
};

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const user = (await getToken({ req })) as TDecodedUser & JWT;

    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // common private routes
    if (commonPrivateRoutes.includes(pathname)) {
        // user don't have password but trying to access change-password
        if (pathname === '/dashboard/change-password' && !user.hasPassword) {
            return NextResponse.redirect(
                new URL('/dashboard/set-password', req.url)
            );
        }
        // user has password but trying to access set-password
        if (pathname === '/dashboard/set-password' && user.hasPassword) {
            return NextResponse.redirect(
                new URL('/dashboard/change-password', req.url)
            );
        }
        return NextResponse.next();
    }

    // role based routes
    const routes = roleBasedPrivateRoutes[user.role];
    if (routes && routes.some((route) => pathname.match(route))) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
    matcher: ['/login', '/register', '/forgot-password', '/dashboard/:page*'],
};
