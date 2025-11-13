import styles from './WhoWillYouChoose.module.scss';
import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import {data} from "./WhoWollYouChooseData.js";
import HeroesSlider from "../HeroesSlider/HeroesSlider.jsx";
import {heroes} from '../WhoWillYouChoose/heroesData.js'
import {useEffect} from "react";

const WhoWillYouChoose = () => {
    const isOnBlock = false
    useEffect(() => {

    }, [isOnBlock]);

    return (
        <div className={styles.whoWillYouChoose}>
            <div className={styles.whoWillYouChooseContainer}>
                <BigBlockWText textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
            </div>
            <div className={styles.heroSlider}>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'ltr'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'ltr'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'ltr'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'ltr'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={'rtl'} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
            </div>
        </div>
    )
}

export default WhoWillYouChoose