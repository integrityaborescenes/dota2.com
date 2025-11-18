import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import styles from './JoinTheBattle.module.scss'
import {data} from './JoinTheBattleBlockData.js'
import {useEffect, useState} from "react";


const JoinTheBattle = () => {

    const [isUserOnBlock, setIsUserOnBlock] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsUserOnBlock(window.scrollY > 350)
        }
        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={styles.joinTheBattleBlock}>
                <BigBlockWText startAnim={isUserOnBlock ? 'start' : ''} textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText} to={'news'}/>
        </div>
    )
}

export default JoinTheBattle