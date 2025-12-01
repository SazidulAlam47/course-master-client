'use server';

import clientPromise from '@/lib/mongodb';

export const findUserByEmail = async (email: string) => {
    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection('users').findOne({ email });
    return user;
};
