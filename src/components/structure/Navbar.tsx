import LogotipoIcone from '@/assets/icons/LogotipoIcone.svg?react'
import UserCircle from '@/assets/icons/UserCircle.svg?react'
import LogotipoCompleto from '@/assets/images/LogotipoCompleto-Cinza.svg'

import styles from '@/components/structure/Navbar.module.css'

import { useState } from 'react';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <div className={styles.container}>

            <div className={styles.logo}>
                <LogotipoIcone />
            </div>

            <div className={isMenuOpen ? `${styles.tabsContainer} ${styles.open}` : styles.tabsContainer}>

                <button
                    className={styles.wordmark}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                >
                    <img src={LogotipoCompleto} alt="Theka" />
                </button>

                <div className={styles.tabs}>

                    <h3>Início</h3>

                    <h3>Acervo</h3>

                    <h3>Sobre nós</h3>

                    <h3>Contato</h3>

                    <UserCircle />

                </div>

            </div>

        </div>

    )
}

export default Navbar