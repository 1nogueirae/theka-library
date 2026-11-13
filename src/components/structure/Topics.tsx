import styles from '@/components/structure/Topics.module.css';

function Topics() {
    return (
        <ul className={styles.container}>
            <li className={styles.topic}>Encontros culturais</li>
            <li className={styles.topic}>Troca de experiências</li>
            <li className={styles.topic}>Comunidade</li>
            <li className={styles.topic}>Educação</li>
            <li className={styles.topic}>Aprendizado</li>
            <li className={styles.topic}>Acesso à informação</li>
            <li className={styles.topic}>Conhecimento</li>
        </ul>
    )
}

export default Topics;
