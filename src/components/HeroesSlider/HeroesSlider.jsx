
import { memo } from 'react'
import styles from './HeroesSlider.module.scss'

const HeroesSlider = ({heroImg, heroAttribute, heroName, direction,allHeroesBlock,animChangePos}) => {

    return (
        <div className={`
        ${styles.heroesSlider}
        ${direction === 'rtl' ? styles.animationLeft :
            direction === 'ltr' ? styles.animationRight : null}
        ${animChangePos === true ? styles.animationChangePos : null}
        `}>
            <div className={`
            ${styles.heroContainer}
            ${allHeroesBlock === true ? styles.allHeroesBlock : null}
            `}>
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