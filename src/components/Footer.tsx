import LogotipoDescritivo from '@/assets/icons/LogotipoDescritivo.svg'
import Cellphone from '@/assets/icons/DeviceMobileCamera.svg?react'
import GlobeSimple from '@/assets/icons/GlobeSimple.svg?react'
import Location from '@/assets/icons/Location.svg?react'
import InstagramLogo from '@/assets/icons/InstagramLogo.svg?react'
import TikTokLogo from '@/assets/icons/TikTokLogo.svg?react'
import XLogo from '@/assets/icons/XLogo.svg?react'
import Info from '@/assets/icons/Info.svg?react'
import Question from '@/assets/icons/Question.svg?react'

import styles from '@/components/Footer.module.css'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <img
                    className={styles.logo}
                    src={LogotipoDescritivo}
                    alt="Theka"
                />
            </div>

            <div className={styles.column}>
                <h2>Contato</h2>
                <p>
                    <Cellphone />
                    (84) 9 9999-2222
                </p>
                <p>
                    <GlobeSimple />
                    www.theka.com.br
                </p>
                <p>
                    <Location />
                    Natal, RN
                </p>
            </div>

            <div className={styles.column}>
                <h2>Redes Sociais</h2>
                <p>
                    <InstagramLogo />
                    @theka.biblioteca
                </p>
                <p>
                    <TikTokLogo />
                    @theka.biblioteca
                </p>
                <p>
                    <XLogo />
                    @theka.biblioteca
                </p>
            </div>

            <div className={styles.column}>
                <h2>Ajuda</h2>
                <p>
                    <Info />
                    Central de ajuda
                </p>
                <p>
                    <Question />
                    FAQ
                </p>
            </div>
        </div>
    )
}

export default Footer