import api from '@/services/api';
import type { RegisterCredentials, RegisterResponse } from '@/types/auth.types';

export const authService = {
    register: async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
        
        const response = await api.post<RegisterResponse>('/users/', credentials);

        return response.data;
    }
};  
