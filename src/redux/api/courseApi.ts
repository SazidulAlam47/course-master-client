/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICourse } from '@/types';
import { baseApi } from './baseApi';

const courseApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCourses: build.query<ICourse[], any>({
            query: () => ({
                url: '/courses/admin',
                method: 'GET',
            }),
            providesTags: ['course'],
        }),
        getCourseById: build.query<ICourse, any>({
            query: (id) => ({
                url: `/courses/${id}`,
                method: 'GET',
            }),
            providesTags: ['course'],
        }),
        createCourse: build.mutation<ICourse, Partial<ICourse>>({
            query: (data) => ({
                url: '/courses',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['course'],
        }),
        updateCourse: build.mutation<
            ICourse,
            { id: string; data: Partial<ICourse> }
        >({
            query: (args) => ({
                url: `/courses/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['course'],
        }),
        deleteCourse: build.mutation<ICourse, string>({
            query: (id) => ({
                url: `/courses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['course'],
        }),
    }),
});

export const {
    useGetAllCoursesQuery,
    useGetCourseByIdQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation,
} = courseApi;
