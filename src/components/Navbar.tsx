import LogotipoIcone from '@/assets/icons/LogotipoIcone.svg?react'
import UserCircle from '@/assets/icons/UserCircle.svg?react'

import styles from '@/components/Navbar.module.css'

function Navbar() {
    return (

        <div className={styles.container}>

            <div className={styles.logo}>
                <LogotipoIcone />
            </div>

            <div className={styles.tabsContainer}>

                <h3>Início</h3>

                <h3>Acervo</h3>

                <h3>Sobre nós</h3>

                <h3>Contato</h3>

                <UserCircle />

            </div>

        </div>

    )
}

export default Navbar