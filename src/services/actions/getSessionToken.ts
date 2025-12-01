'use server';

import { cookies } from 'next/headers';

const getSessionToken = async () => {
    const cookieStore = await cookies();
    const sessionToken =
        cookieStore.get('next-auth.session-token') ||
        cookieStore.get('__Secure-next-auth.session-token');

    if (!sessionToken) {
        throw new Error('Session token not found');
    }

    return sessionToken;
};

export default getSessionToken;
