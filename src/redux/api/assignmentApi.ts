/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    IAssignment,
    TCreateAssignmentPayload,
    TUpdateAssignmentPayload,
} from '@/types';
import { baseApi } from './baseApi';

const assignmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAssignment: build.mutation<IAssignment, TCreateAssignmentPayload>(
            {
                query: (data) => ({
                    url: '/assignments',
                    method: 'POST',
                    data,
                }),
                invalidatesTags: ['assignment', 'enrollment'],
            }
        ),
        updateAssignment: build.mutation<
            IAssignment,
            { id: string; data: TUpdateAssignmentPayload }
        >({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: 'PATCH',
                data,
            }),
            invalidatesTags: ['assignment'],
        }),
        getAssignmentByLessonId: build.query<IAssignment, string>({
            query: (lessonId) => ({
                url: `/assignments/lesson/${lessonId}`,
                method: 'GET',
            }),
            providesTags: ['assignment'],
        }),
        getAllAssignments: build.query<IAssignment[], any>({
            query: () => ({
                url: '/assignments',
                method: 'GET',
            }),
            providesTags: ['assignment'],
        }),
    }),
});

export const {
    useCreateAssignmentMutation,
    useUpdateAssignmentMutation,
    useGetAssignmentByLessonIdQuery,
    useGetAllAssignmentsQuery,
} = assignmentApi;
