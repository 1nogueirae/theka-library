import { publicApi } from '@/services/api';
import type { Publisher } from '@/types/publisher.types';

export const publisherService = {
    get: async (): Promise<Publisher[]> => {
        const response = await publicApi.get('/editoras/');

        return response.data;
    }
};  
