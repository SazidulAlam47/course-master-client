'use server';

import { TUser } from '@/types';
import { FieldValues } from 'react-hook-form';
import getSessionToken from './getSessionToken';

export const registerUser = async (user: TUser) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
            cache: 'no-store',
        }
    );

    const data = await res.json();
    return data;
};

export const changePassword = async (values: FieldValues) => {
    const sessionToken = await getSessionToken();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/change-password`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${sessionToken.value}`,
            },
            body: JSON.stringify(values),
            cache: 'no-store',
        }
    );

    const data = await res.json();
    return data;
};

export const setPassword = async (values: FieldValues) => {
    const sessionToken = await getSessionToken();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/set-password`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${sessionToken.value}`,
            },
            body: JSON.stringify(values),
            cache: 'no-store',
        }
    );

    const data = await res.json();
    return data;
};
