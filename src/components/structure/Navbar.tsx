import LogotipoIcone from '@/assets/icons/LogotipoIcone.svg?react'
import UserCircle from '@/assets/icons/UserCircle.svg?react'
import SignOut from '@/assets/icons/SignOut.svg?react'
import LogotipoCompleto from '@/assets/images/LogotipoCompleto-Cinza.svg'

import styles from '@/components/structure/Navbar.module.css'

import ConfirmModal from '@/components/ConfirmModal'

import { authService } from '@/services/auth'

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

function Navbar() {

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    function handleLogout() {
        authService.logout();
        navigate('/login', { replace: true });
    }

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

                    <button
                        className={styles.userButton}
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsLogoutOpen(true);
                        }}
                        aria-label="Sair da conta"
                    >
                        <UserCircle />
                    </button>

                </div>

            </div>

            {isLogoutOpen && (
                <ConfirmModal
                    message="Deseja sair da sua conta?"
                    confirmText="Sair"
                    confirmIcon={<SignOut />}
                    onConfirm={handleLogout}
                    onCancel={() => setIsLogoutOpen(false)}
                />
            )}

        </div>

    )
}

export default Navbar