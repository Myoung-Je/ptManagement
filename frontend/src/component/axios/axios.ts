import axios from 'axios';
import qs from 'qs';

export const _axios = () => {
    // axios 설정
    const instance = axios.create({
        baseURL: '/',
    });

    // queryParam 설정
    instance.defaults.paramsSerializer = (params) => qs.stringify(params);

    // interceptor 설정
    instance.interceptors.request.use(
        (request) => {
            return request;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return instance;
};
