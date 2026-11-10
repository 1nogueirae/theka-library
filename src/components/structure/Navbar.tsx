import LogotipoIcone from '@/assets/icons/LogotipoIcone.svg?react'
import UserCircle from '@/assets/icons/UserCircle.svg?react'
import LogotipoCompleto from '@/assets/images/LogotipoCompleto-Cinza.svg'

import styles from '@/components/structure/Navbar.module.css'

import { useState } from 'react';
import { NavLink } from 'react-router';

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

                    <NavLink
                        to="/collection"
                        className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Acervo
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre nós
                    </NavLink>

                    <UserCircle />

                </div>

            </div>

        </div>

    )
}

export default Navbar