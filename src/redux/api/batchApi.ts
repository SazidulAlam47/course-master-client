import { IBatch } from '@/types';
import { baseApi } from './baseApi';

const batchApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllBatches: build.query<IBatch[], void>({
            query: () => ({
                url: '/batches',
                method: 'GET',
            }),
            providesTags: ['batch'],
        }),
        getBatchById: build.query<IBatch, string>({
            query: (id) => ({
                url: `/batches/${id}`,
                method: 'GET',
            }),
            providesTags: ['batch'],
        }),
        createBatch: build.mutation<IBatch, Partial<IBatch>>({
            query: (data) => ({
                url: '/batches',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['batch'],
        }),
        updateBatch: build.mutation<
            IBatch,
            { id: string; data: Partial<IBatch> }
        >({
            query: (args) => ({
                url: `/batches/${args.id}`,
                method: 'PATCH',
                data: args.data,
            }),
            invalidatesTags: ['batch'],
        }),
        deleteBatch: build.mutation<IBatch, string>({
            query: (id) => ({
                url: `/batches/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['batch'],
        }),
    }),
});

export const {
    useGetAllBatchesQuery,
    useGetBatchByIdQuery,
    useCreateBatchMutation,
    useUpdateBatchMutation,
    useDeleteBatchMutation,
} = batchApi;
