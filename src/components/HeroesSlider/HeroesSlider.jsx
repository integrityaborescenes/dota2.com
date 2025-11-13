
import { memo } from 'react'
import styles from './HeroesSlider.module.scss'

const HeroesSlider = ({heroImg, heroAttribute, heroName, direction}) => {

    return (
        <div className={`
        ${styles.heroesSlider}
        ${direction === 'rtl' ? styles.animationLeft :
            direction === 'ltr' ? styles.animationRight : ''}
        `}>
            <div className={styles.heroContainer}>
                <img className={styles.heroImg} src={heroImg}/>
                <div className={styles.heroInfo}>
                    <img className={styles.heroAttribute} src={heroAttribute}/>
                    <p className={styles.heroName}>{heroName}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(HeroesSlider)