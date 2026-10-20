import { api, publicApi } from '@/services/api';
import type { RegisterCredentials } from '@/types/auth.types';

export const authService = {
    register: async (credentials: RegisterCredentials): Promise<number> => {
        const response = await publicApi.post('/users/', credentials);

        if (response.status !== 201) throw new Error('Erro ao registrar usuário');

        return response.status;
    }
};  
