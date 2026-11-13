import styles from '@/components/structure/OurValues.module.css';

import AcessoParaTodos from '@/assets/images/Valor-AcessoParaTodos.svg';
import AmorPelaLeitura from '@/assets/images/Valor-AmorPelaLeitura.svg';
import ComunidadeETroca from '@/assets/images/Valor-ComunidadeETroca.svg';

function OurValues() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Nossos valores</h2>

            <ul className={styles.list}>
                <li className={`${styles.card} ${styles.yellow}`}>
                    <h3 className={styles.cardTitle}>Acesso para todos</h3>
                    <img className={styles.shape} src={AcessoParaTodos} alt="" />
                </li>

                <li className={`${styles.card} ${styles.green}`}>
                    <h3 className={styles.cardTitle}>Amor pela leitura</h3>
                    <img className={styles.shape} src={AmorPelaLeitura} alt="" />
                </li>

                <li className={`${styles.card} ${styles.pink}`}>
                    <h3 className={styles.cardTitle}>Comunidade e troca</h3>
                    <img className={styles.shape} src={ComunidadeETroca} alt="" />
                </li>
            </ul>
        </section>
    )
}

export default OurValues;
