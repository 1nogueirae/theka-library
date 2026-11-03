import { useState, useEffect } from 'react';

import { publisherService } from '@/services/publishers';
import type { Publisher } from '@/types/publisher.types';

import styles from '@/components/forms/AddMaterialForm.module.css'

import TextInput from '@/components/TextInput';
import Select from '@/components/Select';

interface AddMaterialFormProps {
    onClose: () => void;
}

function AddMaterialForm({ onClose }: AddMaterialFormProps) {

    const [publishers, setPublishers] = useState<Publisher[]>([]);

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

                <div className={styles.title}>
                    Adicionar material ao catálogo
                </div>

                <div className={styles.form}>

                    <div className={styles.cape}>
                


                    </div>

                    <div className={styles.inputs}>
                        <TextInput label="Título do material" name="title" placeholder="Inserir título do material" />
                        <TextInput label="Número de páginas" name="pages_number" placeholder="000" />
                        <TextInput label="ISBM" name="isbm" placeholder="xxxxxxx" />

                        <TextInput label="Autor" name="author" placeholder="Machado de Assis" />
                        <TextInput label="Ano de publicação" name="publication_year" placeholder="000" />
                        <Select placeholder="Selecionar" options={publishers.map((publisher) => publisher.nome)} />


                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMaterialForm
