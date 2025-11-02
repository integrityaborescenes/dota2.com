import styles from './Header.module.scss'

const Header = () => {
    const headerNav =['heroes', 'news', 'esports']

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.header__logo}></div>
                <div className={styles.nav__game}>
                    <p>Game</p>
                    <div className={styles.arrowDownGame}></div>
                </div>
                <ul className={styles.header__nav}>
                    {headerNav.map(x =>  <li key={x} className={styles.nav_other}>{x.toUpperCase()}</li>)}
                </ul>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.languageLogin}>
                    <p className={styles.login__button}>Login</p>
                    <div className={styles.language__selector}>
                        <div className={styles.language__ico}></div>
                        <p>Select language</p>
                        <div className={styles.arrowDown}></div>
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