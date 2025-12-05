/* eslint-disable @typescript-eslint/no-explicit-any */

import { IQuizAttempt } from '@/types';
import { baseApi } from './baseApi';

const quizAttemptApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createQuizAttempt: build.mutation<IQuizAttempt, any>({
            query: (data) => ({
                url: '/quiz-attempts',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['quizAttempt', 'enrollment', 'lesson'],
        }),
        getQuizAttemptByLessonId: build.query<IQuizAttempt, string>({
            query: (lessonId) => ({
                url: `/quiz-attempts/lesson/${lessonId}`,
                method: 'GET',
            }),
            providesTags: ['quizAttempt'],
        }),
    }),
});

export const {
    useCreateQuizAttemptMutation,
    useGetQuizAttemptByLessonIdQuery,
} = quizAttemptApi;
