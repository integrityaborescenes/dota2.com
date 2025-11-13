import styles from './WhoWillYouChoose.module.scss';
import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import {data} from "./WhoWollYouChooseData.js";
import HeroesSlider from "../HeroesSlider/HeroesSlider.jsx";
import {heroes} from './heroesData1.js'
import {useEffect, useState} from "react";
import {heroes2} from "./heroesData2.js";
import {heroes3} from "./heroesData3.js";

const WhoWillYouChoose = () => {

    const [isUserOnSlider, setIsUserOnSlider] = useState(false);
    const [isUserOnBlock, setIsUserOnBlock] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsUserOnSlider(window.scrollY > 2300)
            setIsUserOnBlock(window.scrollY > 1760)
        }
        window.addEventListener('scroll', handleScroll)
    }, []);


return (
        <div className={styles.whoWillYouChoose}>
            <div className={styles.whoWillYouChooseContainer}>
                <BigBlockWText startAnim={isUserOnBlock ? 'start' : ''} textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
            </div>
            <div className={styles.heroSlider}>
                <div className={styles.heroRow}>
                    {heroes3.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes3.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes2.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'ltr' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes2.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'ltr' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes3.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'ltr' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes3.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'ltr' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
                <div className={styles.heroRow}>
                    {heroes2.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                    {heroes2.map((heroInfo) => (<HeroesSlider key={heroInfo.heroName} direction={isUserOnSlider ? 'rtl' : ''} heroAttribute={heroInfo.heroAttribute} heroImg={heroInfo.heroImg} heroName={heroInfo.heroName}/>))}
                </div>
            </div>
        </div>
    )
}

export default WhoWillYouChoose