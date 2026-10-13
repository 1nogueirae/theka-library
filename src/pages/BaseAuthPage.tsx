import { Outlet } from 'react-router'

import styles from '@/pages/BaseAuthPage.module.css'

import MascoteLaranja from '@/assets/images/Mascote-Laranja300.svg'
import LogotipoLaranja from '@/assets/images/LogotipoCompleto-Laranja.svg'

function BaseAuthPage() {
    return (
        <div className={styles.baseAuthPageContainer}>
            <div className={styles.illustrationContainer}>
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