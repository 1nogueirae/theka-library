import { api } from '@/services/api';
import type { Book } from '@/types/books.types';

export const booksService = {
    news: async (): Promise<Book[]> => {
        const response = await api.get('/livros/novidades');

        return response.data;
    }
};  
