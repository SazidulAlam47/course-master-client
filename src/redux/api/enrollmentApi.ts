/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    IEnrollment,
    IInitPaymentResponse,
    IUpdateEnrollmentPayload,
} from '@/types';
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
        getMyEnrollments: build.query<IEnrollment[], any>({
            query: () => ({
                url: '/enrollments/my-enrollments',
                method: 'GET',
            }),
            providesTags: ['enrollment'],
        }),
        updateEnrollment: build.mutation<
            IEnrollment,
            { id: string; data: IUpdateEnrollmentPayload }
        >({
            query: (args) => ({
                url: `/enrollments/${args.id}`,
                method: 'PATCH',
                data: args.data,
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
    useUpdateEnrollmentMutation,
    useInitPaymentMutation,
} = enrollmentApi;
