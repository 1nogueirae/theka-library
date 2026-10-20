import {api, publicApi} from '@/services/api';
import type { RegisterCredentials, RegisterResponse } from '@/types/auth.types';

export const authService = {
    register: async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
        
        const response = await publicApi.post<RegisterResponse>('/users/', credentials);

        return response.data;
    }
};  
