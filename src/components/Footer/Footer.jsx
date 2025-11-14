import dotaFooterLogo from '@/assets/images/dota_footer_logo.png';
import valveFooterLogo from '@/assets/images/valve_footer_logo.png';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.images}>
                    <img src={valveFooterLogo} width='104' height='30' loading="lazy"/>
                    <img src={dotaFooterLogo} width='147' height='30' loading="lazy"/>
                </div>
                <p>Dota and the Dota logo are trademarks and/or registered trademarks of Valve<br/>
                    Corporation. 2025 Valve Corporation, all rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer