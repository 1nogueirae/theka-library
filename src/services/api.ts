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

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const isUnauthorized = error.response && error.response.status === 401;

        if (isUnauthorized && !originalRequest.alreadyRetried) {
            originalRequest.alreadyRetried = true;

            const refresh = localStorage.getItem('refresh');
            const response = await publicApi.post('/auth/token/refresh/', { refresh: refresh });
            localStorage.setItem('token', response.data.access);

            return api(originalRequest);
        }

        return Promise.reject(error);
    }
);