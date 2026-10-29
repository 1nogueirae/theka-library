export type Book = {
    id: number;
    titulo: string;
    numero_paginas: number;
    capa: string;
    isbn: string;
    autor: string;
    ano_publicacao: number;
    editora: number;
    editora_nome: string;
    resumo: string;
    genero: number;
    genero_nome: string;
    criado_em: string;
    atualizado_em: string;
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