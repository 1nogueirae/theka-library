import styles from '@/pages/AboutPage.module.css';

import AboutBanner from '@/components/structure/AboutBanner';
import Topics from '@/components/structure/Topics';
import OurHistory from '@/components/structure/OurHistory';
import OurValues from '@/components/structure/OurValues';
import OurTeam from '@/components/structure/OurTeam';

function AboutPage() {
    return (
        <div className={styles.container}>
            <AboutBanner />
            <Topics />

            <div className={styles.content}>
                <OurHistory />
                <OurValues />
                <OurTeam />
            </div>
        </div>
    )
}

export default AboutPage;
