/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEnrollment, IInitPaymentResponse } from '@/types';
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
        getAllEnrollments: build.query<IEnrollment[], any>({
            query: () => ({
                url: '/enrollments',
                method: 'GET',
            }),
            providesTags: ['enrollment'],
        }),
        getMyEnrollments: build.query<IEnrollment[], any>({
            query: () => ({
                url: '/enrollments/my-enrollments',
                method: 'GET',
            }),
            providesTags: ['enrollment'],
        }),
        updateEnrollmentCompletedOrder: build.mutation<IEnrollment, string>({
            query: (id) => ({
                url: `/enrollments/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['enrollment'],
        }),
        initPayment: build.mutation<IInitPaymentResponse, any>({
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
    useGetMyEnrollmentsQuery,
    useUpdateEnrollmentCompletedOrderMutation,
    useInitPaymentMutation,
    useGetAllEnrollmentsQuery,
} = enrollmentApi;
