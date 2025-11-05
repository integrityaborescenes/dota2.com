import styles from './WhoWillYouChoose.module.scss';
import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import {data} from "./WhoWollYouChooseData.js";
import HeroesSlider from "../HeroesSlider/HeroesSlider.jsx";

const WhoWillYouChoose = () => {
    return (
        <div className={styles.whoWillYouChoose}>
            <div className={styles.whoWillYouChooseContainer}>
                <BigBlockWText textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
            </div>
            <div className={styles.heroSlider}>
                <div className={styles.heroRow}>
                    <HeroesSlider />
                </div>
                <div className={styles.heroRow}>
                    <HeroesSlider />
                </div>
                <div className={styles.heroRow}>
                    <HeroesSlider />
                </div>
                <div className={styles.heroRow}>
                    <HeroesSlider />
                </div>
                <div className={styles.heroRow}>
                    <HeroesSlider />
                </div>
            </div>
        </div>
    )
}

export default WhoWillYouChoose