import BigBlockWText from "../BigBlockWText/BigBlockWText.jsx";
import styles from './JoinTheBattle.module.scss'
import {data} from './JoinTheBattleBlockData.js'
import {useEffect, useState} from "react";
import {BASE_URL} from "@/routing/index.js";
import RouterLink from "@/routing/RouterLink.jsx";


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
            <RouterLink to={`${BASE_URL}news`} aria-label="News page">
                <BigBlockWText startAnim={isUserOnBlock ? 'start' : ''} textP={data.textP} hSpanText={data.hSpanText} hText={data.hText} buttonText={data.buttonText}/>
            </RouterLink>
        </div>
    )
}

export default JoinTheBattle