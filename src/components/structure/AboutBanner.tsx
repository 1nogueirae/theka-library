import styles from '@/components/structure/AboutBanner.module.css';

import MascoteBanner from '@/assets/images/Mascote-Banner.svg';
import LogotipoAmarelo from '@/assets/images/LogotipoCompleto-Amarelo.svg';

function AboutBanner() {
    return (
        <section className={styles.container}>
            <img className={styles.mascote} src={MascoteBanner} alt="" />

            <div className={styles.content}>
                <div className={styles.informations}>
                    <img className={styles.logo} src={LogotipoAmarelo} alt="Theka" />
                    <p className={styles.text}>
                        A <strong>Theka©</strong> é um espaço feito para conectar pessoas e histórias. Aqui você encontra livros para todos os gostos, além de atividades que incentivam o conhecimento, a cultura e a troca de experiências. Mais do que estantes cheias, somos um ponto de encontro para quem acredita no poder da leitura em transformar vidas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner;
