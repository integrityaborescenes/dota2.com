
import str from '@/assets/images/filterHeroes/filter-str-active.png'
import agi from '@/assets/images/filterHeroes/filter-agi-active.png'
import int from '@/assets/images/filterHeroes/filter-int-active.png'
import uni from '@/assets/images/filterHeroes/filter-uni-active.png'
import dmnd from '@/assets/images/filterHeroes/filter-diamond.png'
import search from '@/assets/images/search.svg'
import HeroesSlider from "@/components/HeroesSlider/HeroesSlider.jsx";
import {allHeroesData} from "@/pages/heroes/allHeroesData.js";
import {useState} from "react";
import hero_agility from '@/assets/images/attribute/hero_agility.png';
import hero_strength from '@/assets/images/attribute/hero_strength.png';
import hero_intelligence from '@/assets/images/attribute/hero_intelligence.png';
import hero_universal from '@/assets/images/attribute/hero_universal.png';
import styles from './ChooseYourHero.module.scss'

const ChooseYourHero = () => {
    const [input, setInput] = useState('')
    const [isSortByAttribute,setIsSortByAttribute] = useState('')
    const handleValueChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div className={styles.chooseUrHero}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>Choose your hero</h3>
                    <p>From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
                </div>
                <div className={styles.filterHeroes}>
                    <div className={styles.description}>
                        <p>Filter Heroes</p>
                    </div>
                    <div className={styles.attribute}>
                        <p>Attribute</p>
                        <img src={str} className={`${styles.imageInactive} ${isSortByAttribute === hero_strength ? styles.active : null}`}
                             onClick={() => setIsSortByAttribute(isSortByAttribute !== hero_strength ? hero_strength : '')}
                             draggable="false" loading="lazy" width="44" height="34" />
                        <img src={agi} className={`${styles.imageInactive} ${isSortByAttribute === hero_agility ? styles.active : null}`}
                             onClick={() => setIsSortByAttribute(isSortByAttribute !== hero_agility ? hero_agility : '')}
                             draggable="false" loading="lazy" width="44" height="34" />
                        <img src={int} className={`${styles.imageInactive} ${isSortByAttribute === hero_intelligence ? styles.active : null}`}
                             onClick={() => setIsSortByAttribute(isSortByAttribute !== hero_intelligence ? hero_intelligence : '')}
                             draggable="false" loading="lazy" width="44" height="34" />
                        <img src={uni} className={`${styles.imageInactive} ${isSortByAttribute === hero_universal ? styles.active : null}`}
                             onClick={() => setIsSortByAttribute(isSortByAttribute !== hero_universal ? hero_universal : '')}
                             draggable="false" loading="lazy" width="44" height="34" />
                    </div>
                    <div className={styles.complexity}>
                        <p>Complexity</p>
                        <img src={dmnd} className={styles.imageInactive} draggable="false" loading="lazy" width="44" height="34" />
                        <img src={dmnd} className={styles.imageInactive} draggable="false" loading="lazy" width="44" height="34" />
                        <img src={dmnd} className={styles.imageInactive} draggable="false" loading="lazy" width="44" height="34" />
                    </div>
                    <div className={styles.searchHero}>
                        <img src={search} draggable="false" loading="lazy" width="26" height="26"/>
                        <input type="text" value={input} onChange={handleValueChange}/>
                    </div>
                </div>
                <div className={styles.heroes}>
                    <div className={styles.heroesRow}>
                        { isSortByAttribute === '' &&
                            allHeroesData.filter((x) => x.heroName.toLowerCase().includes(input.toLowerCase()))
                            .map((heroInfo) => (
                                <HeroesSlider key={heroInfo.heroName}
                                              heroAttribute={heroInfo.heroAttribute}
                                              heroImg={heroInfo.heroImg}
                                              heroName={heroInfo.heroName}
                                              allHeroesBlock={true}
                                              animChangePos={true}
                                />
                            ))
                        }
                        { isSortByAttribute !== '' &&
                            allHeroesData.filter((x) => x.heroAttribute === isSortByAttribute)
                                .map((heroInfo) => (
                                    <HeroesSlider key={heroInfo.heroName}
                                                  heroAttribute={heroInfo.heroAttribute}
                                                  heroImg={heroInfo.heroImg}
                                                  heroName={heroInfo.heroName}
                                                  allHeroesBlock={true}
                                                  animChangePos={true}
                                    />
                                ))
                        }
                    </div>
                    <div className={`
                        ${styles.noHeroes}
                        ${allHeroesData.filter((x) => x.heroName.trim().toLowerCase().includes(input.toLowerCase())).length === 0 ? styles.visible : null}
                        `}>
                        <p>No Heroes match your filter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseYourHero