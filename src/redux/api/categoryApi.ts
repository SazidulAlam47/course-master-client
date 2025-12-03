/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from '@/types';
import { baseApi } from './baseApi';

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCategories: build.query<ICategory[], any>({
            query: () => ({
                url: '/categories',
                method: 'GET',
            }),
            providesTags: ['category'],
        }),
        getCategoryById: build.query<ICategory, string>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'GET',
            }),
            providesTags: ['category'],
        }),
        createCategory: build.mutation<ICategory, Partial<ICategory>>({
            query: (data) => ({
                url: '/categories',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['category'],
        }),
        updateCategory: build.mutation<
            ICategory,
            { id: string; data: Partial<ICategory> }
        >({
            query: (args) => ({
                url: `/categories/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['category'],
        }),
        deleteCategory: build.mutation<ICategory, string>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['category'],
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi;
