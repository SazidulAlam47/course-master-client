/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInstructor } from '@/types';
import { baseApi } from './baseApi';

const instructorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllInstructors: build.query<IInstructor[], any>({
            query: () => ({
                url: '/instructors',
                method: 'GET',
            }),
            providesTags: ['instructor'],
        }),
        getInstructorById: build.query<IInstructor, any>({
            query: (id) => ({
                url: `/instructors/${id}`,
                method: 'GET',
            }),
            providesTags: ['instructor'],
        }),
        createInstructor: build.mutation<IInstructor, any>({
            query: (data) => ({
                url: '/instructors',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['instructor'],
        }),
        updateInstructor: build.mutation<IInstructor, any>({
            query: (args: { id: string; data: IInstructor }) => ({
                url: `/instructors/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['instructor'],
        }),
        deleteInstructor: build.mutation<IInstructor, any>({
            query: (id: string) => ({
                url: `/instructors/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['instructor'],
        }),
    }),
});

export const {
    useGetAllInstructorsQuery,
    useGetInstructorByIdQuery,
    useCreateInstructorMutation,
    useUpdateInstructorMutation,
    useDeleteInstructorMutation,
} = instructorApi;
