export type Book = {
    id: number;
    titulo: string;
    numero_paginas: number;
    capa: string | null;
    isbn: string;
    autor: string;
    ano_publicacao: number;
    editora: string;
    resumo: string;
    genero: string;
    criado_em: string;
    atualizado_em: string;
}

export type BookPayload = Omit<Book, 'id' | 'capa' | 'editora' | 'genero' | 'criado_em' | 'atualizado_em'> & {
    capa: File | null;
    editora: number;
    genero: number;
}

export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export type SearchParams = {
    title: string;
    genre: string;
    publisher: string;
}