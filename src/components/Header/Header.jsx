import {languages} from "@/components/Header/languageData.js";
import styles from './Header.module.scss'
import RouterLink from "@/routing/RouterLink.jsx";
import {BASE_URL} from "@/routing/index.js";

const Header = ({active}) => {

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <RouterLink to={`${BASE_URL}`} aria-label="Home page">
                    <div className={styles.header__logo}></div>
                </RouterLink>
                <div className={styles.nav__game}>
                    <p>Game</p>
                    <div className={styles.arrowDownGame}></div>
                    <div className={styles.gameMenu}>
                        <li>Patches</li>
                        <li>Gameplay Updates</li>
                        <li>Previous Updates</li>
                    </div>
                </div>
                <ul className={styles.header__nav}>
                    <RouterLink to={`${BASE_URL}heroes`} aria-label="News page">
                        <li className={`
                            ${styles.nav_other}
                            ${active === 'heroes' ? styles.active : null}
                            `}>Heroes</li>
                    </RouterLink>
                    <RouterLink to={`${BASE_URL}news`} aria-label="News page">
                            <li className={`
                        ${styles.nav_other}
                        ${active === 'news' ? styles.active : null}
                        `}>News</li>
                    </RouterLink>
                    <RouterLink to={`${BASE_URL}esports`} aria-label="News page">
                    <li className={`
                        ${styles.nav_other}
                        ${active === 'esports' ? styles.active : null}
                        `}>Esports</li>
                    </RouterLink>
                </ul>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.languageLogin}>
                    <p className={styles.login__button}>Login</p>
                    <div className={styles.language__selector}>
                        <div className={styles.language__ico}></div>
                        <p>Select language</p>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.selectLanguageWindow}>
                            {languages.map((lang) => (<a key={lang.label}>{lang.label}</a>))}
                        </div>
                    </div>
                </div>
                <button className={styles.play__button}>
                    <div className={styles.play__buttonCont}>
                        <div className={styles.steamIco}></div>
                        <p>Play for free</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header