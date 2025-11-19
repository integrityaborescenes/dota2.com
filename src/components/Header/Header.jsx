import {languages} from "@/components/Header/languageData.js";
import styles from './Header.module.scss'
import {Link} from "react-router";

const Header = ({active}) => {

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <Link to="/">
                    <div className={styles.header__logo}></div>
                </Link>
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
                    <Link to="/heroes">
                        <li className={`
                            ${styles.nav_other}
                            ${active === 'heroes' ? styles.active : null}
                            `}>Heroes</li>
                    </Link>
                    <Link to="/news">
                            <li className={`
                        ${styles.nav_other}
                        ${active === 'news' ? styles.active : null}
                        `}>News</li>
                     </Link>
                    <li className={`
                        ${styles.nav_other}
                        ${active === 'esports' ? styles.active : null}
                        `}>Esports</li>
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