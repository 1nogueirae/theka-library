import { useNavigate } from 'react-router';

import styles from '@/pages/NotFoundPage.module.css';

import Button from '@/components/Button';

import MascoteLaranja from '@/assets/images/Mascote-Laranja300.svg';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <img className={styles.mascote} src={MascoteLaranja} alt="Mascote Laranja" />
            <h1 className={styles.title}>Página não encontrada</h1>
            <p className={styles.text}>O endereço que você acessou não existe.</p>
            <Button text="Voltar ao início" variant="secondary" onClick={() => navigate('/collection')} />
        </div>
    )
}

export default NotFoundPage;
