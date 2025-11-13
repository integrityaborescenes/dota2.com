import styles from "./BigBlockWText.module.scss";
import OrangeLine from "../OrangeLine/OrangeLine.jsx";
import Button from "../Button/Button.jsx";

const BigBlockWText = ({textP,hSpanText,hText,buttonText,startAnim}) => {

    const relocateToSteam = (e) => {
        console.log('Отправлен в стим')
    }

    return (
            <div className={styles.blockWithText}>
                <h2 className={`${startAnim === 'start' ? styles.animation : ''}`}><span style={{color: "#ffffff90",  fontSize: "70px"}}>{hSpanText}</span><br/>{hText}</h2>
                <OrangeLine />
                <p className={styles.pText}>{textP}</p>
                <Button
                    buttonText={buttonText}
                    onRelocateToSteam={relocateToSteam}
                />
            </div>
    )
}

export default BigBlockWText