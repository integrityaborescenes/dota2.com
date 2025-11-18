import styles from "./BigBlockWText.module.scss";
import OrangeLine from "../OrangeLine/OrangeLine.jsx";
import Button from "../Button/Button.jsx";
import {BASE_URL} from "@/routing/index.js";
import RouterLink from "@/routing/RouterLink.jsx";

const BigBlockWText = ({textP,hSpanText,hText,buttonText,startAnim,to}) => {

    return (
            <div className={styles.blockWithText}>
                <h2 className={`${startAnim === 'start' ? styles.animation : ''}`}><span style={{color: "#ffffff90",  fontSize: "70px"}}>{hSpanText}</span><br/>{hText}</h2>
                <OrangeLine />
                <p className={styles.pText}>{textP}</p>
                <RouterLink to={`${BASE_URL}${to}`} aria-label="News page">
                    <Button
                        buttonText={buttonText}
                    />
                </RouterLink>
            </div>
    )
}

export default BigBlockWText