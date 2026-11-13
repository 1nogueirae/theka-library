import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form'

import { publisherService } from '@/services/publishers';
import type { Publisher } from '@/types/publisher.types';

import { genreService } from '@/services/genres';
import type { Genre } from '@/types/genre.types';

import { booksService } from '@/services/books';
import type { Book, BookPayload } from '@/types/books.types';

import styles from '@/components/forms/MaterialForm.module.css'
import TextInputStyles from '@/components/TextInput.module.css';

import Modal from '@/components/Modal';
import ConfirmModal from '@/components/ConfirmModal';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';
import Button from '@/components/Button';

import UploadIcon from '@/assets/icons/Export.svg?react';
import BookmarkIcon from '@/assets/icons/BookmarkSimple.svg?react';
import TrashIcon from '@/assets/icons/Trash.svg?react';
import ImagesIcon from '@/assets/icons/Images.svg?react';

interface MaterialFormProps {
    book: Book | null;
    onClose: () => void;
    onSave: () => void;
}

type MaterialFormData = Omit<BookPayload, 'capa' | 'genero' | 'editora'> & {
    capa: FileList;
};

function MaterialForm({ book, onClose, onSave }: MaterialFormProps) {
    const { register, handleSubmit, formState } = useForm<MaterialFormData>({
        defaultValues: {
            titulo: book?.titulo,
            numero_paginas: book?.numero_paginas,
            ano_publicacao: book?.ano_publicacao,
            autor: book?.autor,
            isbn: book?.isbn,
            resumo: book?.resumo,
        }
    })

    const [coverPreview, setCoverPreview] = useState<string | null>(book?.capa ?? null);

    const [publishers, setPublishers] = useState<Publisher[]>([]);
    const [publisher, setPublisher] = useState<number | null>(null);

    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState<number | null>(null);

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        const getPublishers = async () => {
            try {
                const publishers = await publisherService.get();
                setPublishers(publishers);
                setPublisher(publishers.find((p) => p.nome === book?.editora)?.id ?? null);
            } catch (error) {
                console.error('Error fetching publishers:', error);
            }
        }
        const getGenres = async () => {
            try {
                const genres = await genreService.get();
                setGenres(genres);
                setGenre(genres.find((g) => g.nome === book?.genero)?.id ?? null);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        }
        getPublishers();
        getGenres();
    }, [book])

    function handleSave(data: MaterialFormData) {
        if (!genre || !publisher) return;

        const newBook: BookPayload = {
            titulo: data.titulo,
            numero_paginas: Number(data.numero_paginas),
            capa: data.capa?.[0] ?? null,
            isbn: data.isbn,
            autor: data.autor,
            ano_publicacao: Number(data.ano_publicacao),
            editora: publisher,
            resumo: data.resumo,
            genero: genre,
        };
        const request = book ? booksService.update(book.id, newBook) : booksService.publish(newBook);

        request
            .then(() => { onSave() })
            .catch((error) => console.error('Error saving book:', error))
    }

    function handleDelete() {
        if (!book) return;

        booksService.remove(book.id)
            .then(() => { onSave() })
            .catch((error) => console.error('Error deleting book:', error))
    }

    return (
        <>
            <Modal className={styles.modal} onClose={onClose}>

                <h2 className={styles.title}>{book ? 'Editar material' : 'Adicionar material ao catálogo'}</h2>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit(handleSave)}
                    noValidate
                >
                    <div
                        className={styles.cover}
                        style={coverPreview ? { backgroundImage: `url(${coverPreview})` } : undefined}
                    >
                        {!coverPreview && <ImagesIcon className={styles.coverIcon} />}
                        <label className={styles.coverButton}>
                            {coverPreview ? 'Trocar capa' : 'Adicionar capa'}
                            <UploadIcon />
                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                hidden
                                {...register('capa', {
                                    onChange: (e) => {
                                        const file = e.target.files?.[0];
                                        setCoverPreview(file ? URL.createObjectURL(file) : null);
                                    },
                                })}
                            />
                        </label>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.inputs}>
                            <TextInput
                                {...register('titulo',
                                    {
                                        required: 'O título é obrigatório'
                                    }
                                )}
                                id="title"
                                placeholder="Inserir o título do material"
                                label="Título do material:"
                                error={formState.errors.titulo?.message}
                                containerClassName={styles.span2}
                            />
                            <TextInput
                                {...register('numero_paginas',
                                    {
                                        required: 'O número de páginas é obrigatório',
                                        pattern: { value: /^[0-9]+$/, message: 'Formato inválido' }
                                    }
                                )}
                                id="pages_number"
                                placeholder="000"
                                label="Número de páginas"
                                error={formState.errors.numero_paginas?.message}
                            />
                            <TextInput
                                {...register('ano_publicacao',
                                    {
                                        required: 'O ano de publicação é obrigatório',
                                        pattern: { value: /^[0-9]+$/, message: 'Formato inválido' }
                                    }
                                )}
                                id="publication_year"
                                placeholder="000"
                                label="Ano de publicação"
                                error={formState.errors.ano_publicacao?.message}
                            />

                            <TextInput
                                {...register('autor',
                                    {
                                        required: 'O autor é obrigatório'
                                    }
                                )}
                                id="author"
                                placeholder="Machado de Assis"
                                label="Autor:"
                                error={formState.errors.autor?.message}
                                containerClassName={styles.span2}
                            />
                            <TextInput
                                {...register('isbn',
                                    {
                                        required: 'O ISBN é obrigatório',
                                        pattern: { value: /^[0-9-]+[0-9Xx]$/, message: 'Formato inválido' }
                                    }
                                )}
                                id="isbn"
                                placeholder="xxxxxxx"
                                label="ISBN"
                                error={formState.errors.isbn?.message}
                                containerClassName={styles.span2}
                            />

                            <div className={`${TextInputStyles.field} ${styles.span2}`}>
                                <span className={styles.label}>Gênero</span>
                                <Select
                                    placeholder="Selecionar"
                                    options={genres.map((g) => g.nome)}
                                    value={genres.find((g) => g.id === genre)?.nome ?? ''}
                                    onChange={(nome) => setGenre(genres.find((g) => g.nome === nome)?.id ?? null)}
                                />
                                {formState.isSubmitted && !genre && <p className={TextInputStyles.error}>O gênero é obrigatório</p>}
                            </div>
                            <div className={`${TextInputStyles.field} ${styles.span2}`}>
                                <span className={styles.label}>Editora</span>
                                <Select
                                    placeholder="Selecionar"
                                    options={publishers.map((p) => p.nome)}
                                    value={publishers.find((p) => p.id === publisher)?.nome ?? ''}
                                    onChange={(nome) => setPublisher(publishers.find((p) => p.nome === nome)?.id ?? null)}
                                />
                                {formState.isSubmitted && !publisher && <p className={TextInputStyles.error}>A editora é obrigatória</p>}
                            </div>
                        </div>

                        <TextArea
                            {...register('resumo',
                                {
                                    required: 'O resumo é obrigatório'
                                }
                            )}
                            id="summary"
                            placeholder="Inserir um breve resumo do material."
                            label="Resumo do material:"
                            error={formState.errors.resumo?.message}
                        />

                        <div className={book ? `${styles.actions} ${styles.editActions}` : styles.actions}>
                            {book && <Button text="Deletar" variant="pink" icon={<TrashIcon />} onClick={() => setShowDeleteConfirm(true)} />}
                            <Button text="Cancelar" variant="pinkSecondary" onClick={onClose} />
                            <Button text="Salvar" variant="pink" icon={<BookmarkIcon />} type="submit" />
                        </div>
                    </div>

                </form>
            </Modal>

            {showDeleteConfirm && (
                <ConfirmModal
                    message="Deseja deletar este material?"
                    confirmText="Deletar"
                    confirmIcon={<TrashIcon />}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteConfirm(false)}
                />
            )}
        </>
    )
}

export default MaterialForm
