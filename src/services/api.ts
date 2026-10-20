import axios from 'axios';

const config = {
    baseURL: 'https://thekaapitrainee1.pythonanywhere.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
}

export const api = axios.create(config);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const publicApi = axios.create(config);