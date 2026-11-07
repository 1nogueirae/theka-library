import { useState, useEffect } from 'react';

import { publisherService } from '@/services/publishers';
import type { Publisher } from '@/types/publisher.types';

import styles from '@/components/forms/AddMaterialForm.module.css'

import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';
import Button from '@/components/Button';

import UploadIcon from '@/assets/icons/Export.svg?react';
import BookmarkIcon from '@/assets/icons/BookmarkSimple.svg?react';

interface AddMaterialFormProps {
    onClose: () => void;
}

function AddMaterialForm({ onClose }: AddMaterialFormProps) {

    const [publishers, setPublishers] = useState<Publisher[]>([]);
    const [publisher, setPublisher] = useState('');

    useEffect(() => {
        const getPublishers = async () => {
            try {
                const publishers = await publisherService.get();
                setPublishers(publishers);
            } catch (error) {
                console.error('Error fetching publishers:', error);
            }
        }
        getPublishers();
    }, [])

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <h2 className={styles.title}>Adicionar material ao catálogo</h2>

                <div className={styles.form}>

                    <div className={styles.cover}>
                        <button type="button" className={styles.coverButton}>
                            Adicionar capa
                            <UploadIcon />
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.inputs}>
                            <div className={styles.leftInputs}>
                                <TextInput id="title" label="Título do material:" name="title" placeholder="Inserir o título do material" />
                                <TextInput id="author" label="Autor:" name="author" placeholder="Machado de Assis" />
                            </div>

                            <div className={styles.rightInputs}>
                                <TextInput id="pages_number" label="Número de páginas" name="pages_number" placeholder="000" />
                                <TextInput id="isbm" label="ISBM" name="isbm" placeholder="xxxxxxx" />
                                <TextInput id="publication_year" label="Ano de publicação" name="publication_year" placeholder="000" />
                                <div className={styles.field}>
                                    <span className={styles.label}>Editora</span>
                                    <Select
                                        placeholder="Selecionar"
                                        options={publishers.map((p) => p.nome)}
                                        value={publisher}
                                        onChange={setPublisher}
                                    />
                                </div>
                            </div>
                        </div>

                        <TextArea
                            id="summary"
                            label="Resumo do material:"
                            name="summary"
                            placeholder="Inserir um breve resumo do material."
                        />

                        <div className={styles.actions}>
                            <Button text="Cancelar" variant="pinkSecondary" onClick={onClose} />
                            <Button text="Salvar" variant="pink" icon={<BookmarkIcon />} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMaterialForm
