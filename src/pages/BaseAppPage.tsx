import styles from '@/pages/BaseAppPage.module.css';

import Navbar from '@/components/structure/Navbar'
import Footer from '@/components/structure/Footer'
import { Outlet } from 'react-router';

function BaseAppPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default BaseAppPage;