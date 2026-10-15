import { Outlet, useLocation } from 'react-router'

import styles from '@/pages/BaseAuthPage.module.css'

import MascoteLaranja from '@/assets/images/Mascote-Laranja300.svg'
import LogotipoLaranja from '@/assets/images/LogotipoCompleto-Laranja.svg'

function BaseAuthPage() {
    const { pathname } = useLocation()

    const illustrationClassName = pathname === '/login'
        ? styles.illustrationContainer
        : `${styles.illustrationContainer} ${styles.leftLeg}`

    return (
        <div className={styles.baseAuthPageContainer}>
            <div className={illustrationClassName}>
                <img className={styles.mascote} src={MascoteLaranja} alt="Mascote Laranja" />
                <img className={styles.logo} src={LogotipoLaranja} alt="Theka" />
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formContent}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default BaseAuthPage