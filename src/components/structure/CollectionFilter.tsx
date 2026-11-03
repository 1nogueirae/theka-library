import { useState, useEffect } from 'react';

import styles from '@/components/structure/CollectionFilter.module.css';

import SerchIcon from '@/assets/icons/MagnifyingGlass.svg?react';
import FadersIcon from '@/assets/icons/Faders.svg?react';

import Button from '@/components/Button';
import Select from '@/components/Select';

import { genreService } from '@/services/genres';
import type { Genre } from '@/types/genre.types';
import { publisherService } from '@/services/publishers';
import type { Publisher } from '@/types/publisher.types';
import type { SearchParams } from '@/types/books.types';

type CollectionFilterProps = {
    onApply: (params: SearchParams) => void;
};

function CollectionFilter({ onApply }: CollectionFilterProps) {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [publishers, setPublishers] = useState<Publisher[]>([]);
    const [selectedParams, setSelectedParams] = useState<SearchParams>({
        title: '',
        genre: '',
        publisher: '',
    });
    const [filtersOpen, setFiltersOpen] = useState(false);

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

    function handleParamChange(param: keyof SearchParams, value: string) {
        setSelectedParams((currentParams) => ({
            ...currentParams,
            [param]: value,
        }));
    }

    function handleApplyFilters() {
        onApply(selectedParams);
        setFiltersOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>

                <input
                    placeholder="Fazer busca"
                    value={selectedParams.title}
                    onChange={(e) => handleParamChange('title', e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onApply(selectedParams);
                    }}  
                />
                
                <div className={styles.selectsContainer}>
                    <Select
                        placeholder="Gênero"
                        options={genres.map((genre) => genre.nome)}
                        value={selectedParams.genre}
                        onChange={(value) => handleParamChange('genre', value)}
                    />

                    <Select
                        placeholder="Editora"
                        options={publishers.map((publisher) => publisher.nome)}
                        value={selectedParams.publisher}
                        onChange={(value) => handleParamChange('publisher', value)}
                    />

                </div>

                <Button
                    text="Buscar"
                    variant="pink"
                    icon={<SerchIcon />}
                    onClick={() => onApply(selectedParams)}
                />
            </div>

            <div className={styles.filtersMenu}>
                <button
                    className={styles.filtersButton}
                    onClick={() => setFiltersOpen(!filtersOpen)}
                >
                    <FadersIcon />
                </button>

                {filtersOpen && (
                    <div className={styles.filtersPanel}>
                        <h2 className={styles.filtersTitle}>Filtros</h2>

                        <Select
                            placeholder="Gênero"
                            options={genres.map((genre) => genre.nome)}
                            value={selectedParams.genre}
                            onChange={(value) => handleParamChange('genre', value)}
                        />

                        <Select
                            placeholder="Editora"
                            options={publishers.map((publisher) => publisher.nome)}
                            value={selectedParams.publisher}
                            onChange={(value) => handleParamChange('publisher', value)}
                        />

                        <Button
                            text="Filtrar"
                            variant="pink"
                            icon={<FadersIcon />}
                            onClick={handleApplyFilters}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollectionFilter;