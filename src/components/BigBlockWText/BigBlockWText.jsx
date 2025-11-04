import styles from "./BigBlockWText.module.scss";
import OrangeLine from "../OrangeLine/OrangeLine.jsx";
import Button from "../Button/Button.jsx";

const BigBlockWText = ({textP,hSpanText,hText,buttonText}) => {
    return (
            <div className={styles.blockWithText}>
                <h2><span style={{color: "#ffffff90",  fontSize: "70px"}}>{hSpanText}</span><br/>{hText}</h2>
                <OrangeLine />
                <p className={styles.pText}>{textP}</p>
                <Button buttonText={buttonText}/>
            </div>
    )
}

export default BigBlockWText