import { api } from '@/services/api';
import type { Book, BookPayload, PaginatedResponse, SearchParams } from '@/types/books.types';

type ListParams = SearchParams & {
    page: number;
    pageSize: number;
};

function toFormData(data: BookPayload) {
    const body = new FormData();

    body.append('titulo', data.titulo);
    body.append('autor', data.autor);
    body.append('isbn', data.isbn);
    body.append('numero_paginas', String(data.numero_paginas));
    body.append('ano_publicacao', String(data.ano_publicacao));
    body.append('resumo', data.resumo);
    body.append('editora', String(data.editora));
    body.append('genero', String(data.genero));

    if (data.capa) body.append('capa', data.capa);

    return body;
}

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
    },
    publish: async (data: BookPayload): Promise<Book> => {
        const response = await api.post<Book>('/livros/', toFormData(data), { headers: { 'Content-Type': 'multipart/form-data' } });

        return response.data;
    },
    update: async (id: number, data: BookPayload): Promise<Book> => {
        const response = await api.patch<Book>(`/livros/${id}/`, toFormData(data), { headers: { 'Content-Type': 'multipart/form-data' } });

        return response.data;
    },
    remove: async (id: number): Promise<void> => {
        await api.delete(`/livros/${id}/`);
    }
};
