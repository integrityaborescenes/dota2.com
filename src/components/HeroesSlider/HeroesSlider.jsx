import styles from './HeroesSlider.module.scss'


const HeroesSlider = () => {
    return (
        <div className={styles.heroesSlider}>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src='src/assets/images/heroes/faceless_void.png'/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src='src/assets/images/atribute/hero_agility.png'/>
                    <p className={styles.heroName}>Faceless Void</p>
                </div>
            </div>
        </div>
    )
}

export default HeroesSlider