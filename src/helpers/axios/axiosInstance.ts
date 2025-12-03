import axios from 'axios';
import type { TResponseErrorType, TResponseSuccessType } from '../../types';
import getSessionToken from '@/services/actions/getSessionToken';

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.baseURL = process.env
    .NEXT_PUBLIC_BACKEND_API_URL as string;

axiosInstance.interceptors.request.use(
    async function (config) {
        const sessionToken = await getSessionToken();
        if (sessionToken) {
            config.headers.Authorization = `Bearer ${sessionToken.value}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    // @ts-expect-error modify the response
    function (response) {
        const responseObject: TResponseSuccessType = {
            data: response?.data?.data,
        };
        return responseObject;
    },
    async function (error) {
        const responseObject: TResponseErrorType = {
            statusCode: error?.status || 500,
            message: error?.response?.data?.message || 'Something went wrong!',
        };
        return Promise.reject(responseObject);
    }
);

export default axiosInstance;
