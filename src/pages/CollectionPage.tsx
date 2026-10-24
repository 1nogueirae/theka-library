import styles from '@/pages/CollectionPage.module.css';

import Carousel from '@/components/structure/Carousel';

function CollectionPage() {
    return (
        <div className={styles.container}>
            <Carousel />
        </div>
    )
}

export default CollectionPage;