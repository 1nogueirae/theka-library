import { useState, useEffect } from 'react';

import styles from '@/components/structure/CollectionFilter.module.css';

import SerchIcon from '@/assets/icons/MagnifyingGlass.svg?react';

import Button from '@/components/Button';
import Select from '@/components/Select';

import { genreService } from '@/services/genres';
import type { Genre } from '@/types/genre.types';
import { publisherService } from '@/services/publishers';
import type { Publisher } from '@/types/publisher.types';

function CollectionFilter() {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [publishers, setPublishers] = useState<Publisher[]>([]);

    useEffect(() => {
        const getGenres = async () => {
            try {
                const genres = await genreService.get();
                setGenres(genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        }
        const getPublishers = async () => {
            try {
                const publishers = await publisherService.get();
                setPublishers(publishers);
            } catch (error) {
                console.error('Error fetching publishers:', error);
            }
        }
        getGenres();
        getPublishers();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>

                <input
                    placeholder="Fazer busca"
                >
                </input>

                <div className={styles.selectsContainer}>
                    <Select
                        placeholder="Gênero"
                        options={genres.map((genre) => genre.nome)}
                    />

                    <Select
                        placeholder="Editora"
                        options={publishers.map((publisher) => publisher.nome)}
                    />

                </div>

                <Button
                    text="Buscar"
                    variant="pink"
                    icon={<SerchIcon />}
                />
            </div>

        </div>
    )
}

export default CollectionFilter;