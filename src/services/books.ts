import { api } from '@/services/api';
import type { Book, PaginatedResponse, SearchParams } from '@/types/books.types';

type ListParams = SearchParams & {
    page: number;
    pageSize: number;
};

export const booksService = {
    list: async ({
        page,
        pageSize,
        title,
        genre,
        publisher,
    }: ListParams): Promise<PaginatedResponse<Book>> => {
        const response = await api.get<PaginatedResponse<Book>>('/livros/', {
            params: {
                page,
                page_size: pageSize,
                ...(title && { titulo__icontains: title }),
                ...(genre && { genero_nome: genre }),
                ...(publisher && { editora_nome: publisher }),
            }
        });
        return response.data;
    },
    news: async (): Promise<Book[]> => {
        const response = await api.get('/livros/novidades');

        return response.data;
    }
};  
