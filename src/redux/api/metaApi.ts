/* eslint-disable @typescript-eslint/no-explicit-any */

import { IMeta } from '@/types';
import { baseApi } from './baseApi';

const metaApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMeta: build.query<IMeta, any>({
            query: () => ({
                url: '/meta',
                method: 'GET',
            }),
            providesTags: ['meta'],
        }),
    }),
});

export const { useGetMetaQuery } = metaApi;
