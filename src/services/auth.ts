import { publicApi } from '@/services/api';
import type { RegisterCredentials, LoginCredentials, LoginResponse } from '@/types/auth.types';

export const authService = {
    register: async (credentials: RegisterCredentials): Promise<number> => {
        const response = await publicApi.post('/users/', credentials);

        if (response.status !== 201) throw new Error('Erro ao registrar usuário');

        return response.status;
    },
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await publicApi.post<LoginResponse>('/auth/token/', credentials);

        return response.data;
    }
};  
