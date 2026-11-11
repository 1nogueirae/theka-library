import { publicApi } from '@/services/api';
import type { Genre } from '@/types/genre.types';

export const genreService = {
    get: async (): Promise<Genre[]> => {
        const response = await publicApi.get('/generos/');

        return response.data;
    }
};  
