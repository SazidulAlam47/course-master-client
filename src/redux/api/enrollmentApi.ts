/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEnrollment } from '@/types';
import { baseApi } from './baseApi';

const enrollmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createEnrollment: build.mutation<IEnrollment, any>({
            query: (data) => ({
                url: '/enrollments',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['enrollment'],
        }),
        getEnrollmentById: build.query<IEnrollment, string>({
            query: (id) => ({
                url: `/enrollments/${id}`,
                method: 'GET',
            }),
            providesTags: ['enrollment'],
        }),
        updateEnrollment: build.mutation<
            IEnrollment,
            { id: string; data: { completedLessonIndex: number } }
        >({
            query: (args) => ({
                url: `/enrollments/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['enrollment'],
        }),
        initPayment: build.mutation<{ paymentUrl: string }, any>({
            query: (data) => ({
                url: '/payment/init-payment',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['enrollment'],
        }),
    }),
});

export const {
    useCreateEnrollmentMutation,
    useGetEnrollmentByIdQuery,
    useUpdateEnrollmentMutation,
    useInitPaymentMutation,
} = enrollmentApi;
