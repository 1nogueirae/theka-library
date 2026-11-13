import styles from '@/components/structure/OurHistory.module.css';

import HistoriaDesktop from '@/assets/images/Historia-Desktop.svg';
import HistoriaMobile from '@/assets/images/Historia-Mobile.svg';

function OurHistory() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Nossa história</h2>

            <div className={styles.text}>
                <p>No começo, era apenas uma pequena coleção de livros reunidos com carinho, mas, com o tempo, foi crescendo e conquistando cada vez mais leitores.</p>
                <p>Hoje, além de guardar histórias nas estantes, também faz parte da história de quem passa por aqui: estudantes, pesquisadores, curiosos e apaixonados por livros. Seguimos firmes na missão de ser um ponto de encontro, aprendizado e inspiração para todos.</p>
            </div>

            <img className={styles.shapeDesktop} src={HistoriaDesktop} alt="" />
            <img className={styles.shapeMobile} src={HistoriaMobile} alt="" />
        </section>
    )
}

export default OurHistory;
