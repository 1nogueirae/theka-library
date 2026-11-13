import styles from '@/components/structure/OurTeam.module.css';

import MariaMarta from '@/assets/images/Equipe-MariaMarta.png';
import JuliaMaria from '@/assets/images/Equipe-JuliaMaria.png';
import JenniferOliveira from '@/assets/images/Equipe-JenniferOliveira.png';
import JosivaldoLopes from '@/assets/images/Equipe-JosivaldoLopes.png';

function OurTeam() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Nossa equipe</h2>

            <ul className={styles.list}>
                <li className={`${styles.card} ${styles.orange}`}>
                    <img className={styles.photo} src={MariaMarta} alt="Maria Marta" />
                    <span className={styles.name}>Maria Marta</span>
                </li>

                <li className={`${styles.card} ${styles.olive}`}>
                    <img className={styles.photo} src={JuliaMaria} alt="Júlia Maria" />
                    <span className={styles.name}>Júlia Maria</span>
                </li>

                <li className={`${styles.card} ${styles.magenta}`}>
                    <img className={styles.photo} src={JenniferOliveira} alt="Jeniffer Oliveira" />
                    <span className={styles.name}>Jeniffer Oliveira</span>
                </li>

                <li className={`${styles.card} ${styles.green}`}>
                    <img className={styles.photo} src={JosivaldoLopes} alt="Josivaldo Lopes" />
                    <span className={styles.name}>Josivaldo Lopes</span>
                </li>
            </ul>
        </section>
    )
}

export default OurTeam;
