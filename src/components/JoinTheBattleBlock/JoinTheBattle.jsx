import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import styles from './JoinTheBattle.module.scss'
import {data} from './JoinTheBattleBlockData.js'


const JoinTheBattle = () => {
    return (
        <div className={styles.joinTheBattleBlock}>
            <BigBlockWText textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
        </div>
    )
}

export default JoinTheBattle