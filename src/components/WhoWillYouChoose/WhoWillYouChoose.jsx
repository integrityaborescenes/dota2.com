import styles from './WhoWillYouChoose.module.scss';
import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import {data} from "./WhoWollYouChooseData.js";

const WhoWillYouChoose = () => {
    return (
        <div className={styles.whoWillYouChoose}>
            <div className={styles.whoWillYouChooseContainer}>
                <BigBlockWText textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
            </div>
        </div>
    )
}

export default WhoWillYouChoose