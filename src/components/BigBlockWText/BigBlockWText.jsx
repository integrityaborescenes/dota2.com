import styles from "./BigBlockWText.module.scss";
import OrangeLine from "../OrangeLine/OrangeLine.jsx";
import Button from "../Button/Button.jsx";
import {Link} from "react-router";

const BigBlockWText = ({textP,hSpanText,hText,buttonText,startAnim,to}) => {

    return (
            <div className={styles.blockWithText}>
                <h2 className={`${startAnim === 'start' ? styles.animation : ''}`}><span style={{color: "#ffffff90",  fontSize: "70px"}}>{hSpanText}</span><br/>{hText}</h2>
                <OrangeLine />
                <p className={styles.pText}>{textP}</p>
                <Link to={`/${to}`}>
                    <Button
                        buttonText={buttonText}
                    />
                </Link>
            </div>
    )
}

export default BigBlockWText