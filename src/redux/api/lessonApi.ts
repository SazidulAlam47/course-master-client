/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILesson } from '@/types';
import { baseApi } from './baseApi';

const lessonApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getLessonById: build.query<ILesson, string>({
            query: (id) => ({
                url: `/lessons/${id}`,
                method: 'GET',
            }),
            providesTags: ['lesson'],
        }),
        getLessonByOrder: build.query<ILesson, number>({
            query: (order) => ({
                url: `/lessons/order/${order}`,
                method: 'GET',
            }),
            providesTags: ['lesson'],
        }),
        createLesson: build.mutation<ILesson, Partial<ILesson>>({
            query: (data) => ({
                url: '/lessons',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['lesson', 'course'],
        }),
        updateLesson: build.mutation<
            ILesson,
            { id: string; data: Partial<ILesson> }
        >({
            query: (args) => ({
                url: `/lessons/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['lesson', 'course'],
        }),
        deleteLesson: build.mutation<ILesson, string>({
            query: (id) => ({
                url: `/lessons/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['lesson', 'course'],
        }),
    }),
});

export const {
    useGetLessonByIdQuery,
    useGetLessonByOrderQuery,
    useCreateLessonMutation,
    useUpdateLessonMutation,
    useDeleteLessonMutation,
} = lessonApi;
