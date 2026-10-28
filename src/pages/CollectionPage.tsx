import styles from '@/pages/CollectionPage.module.css';

import Carousel from '@/components/structure/Carousel';
import CollectionFilter from '@/components/structure/CollectionFilter';

function CollectionPage() {
    return (
        <div className={styles.container}>
            <Carousel />

            <div className={styles.title}>
                Veja nosso catálogo
            </div>
            <CollectionFilter />
        </div>
    )
}

export default CollectionPage;