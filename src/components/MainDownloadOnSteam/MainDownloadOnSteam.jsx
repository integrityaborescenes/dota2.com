import styles from './MainDownloadOnSteam.module.scss'

const MainDownloadOnSteam = () => {
    return (
        <div className={styles.mainDownload}>
            <div className={styles.mainDownloadContainer}>
                <h1>“A Modern Multiplayer <br/> Masterpiece.”</h1>
                <p>- Destructoid</p>
                <div className={styles.mainOrange__line}></div>
                <button className={styles.mainPlay__button}>
                    <div className={styles.mainPlay__buttonCont}>
                        <div className={styles.steamIco}></div>
                        <div className={styles.textColumn}>
                            <p>Play for free</p>
                            <span>Download on steam</span>
                        </div>

                    </div>
                </button>
            </div>
        </div>
    )
}

export default MainDownloadOnSteam