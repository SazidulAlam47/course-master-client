'use server';

import { ICourse, IEnrollment } from '@/types';
import getSessionToken from './getSessionToken';

export const getMyEnrollments = async () => {
    const sessionToken = await getSessionToken();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/enrollments/my-enrollments`,
        {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${sessionToken.value}`,
            },
            cache: 'no-store',
        }
    );

    const data = await res.json();
    return data.data as IEnrollment[];
};

export const getAllCourses = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/courses`,
        {
            next: { revalidate: 60 },
        }
    );
    const data = await res.json();
    return data.data as ICourse[];
};

export const getCourseById = async (id: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/courses/${id}/public`,
        {
            cache: 'no-store',
        }
    );
    const data = await res.json();
    return data.data as ICourse;
};
