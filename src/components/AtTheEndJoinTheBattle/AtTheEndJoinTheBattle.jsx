import styles from './AtTheEndJoinTheBattle.module.scss'
import OrangeLine from "../OrangeLine/OrangeLine.jsx";
import Button from "../Button/Button.jsx";

const AtTheEndJoinTheBattle = () => {
    const relocateToSteam = (e) => {
        console.log('Отправлен в стим')
    }
    return (
        <div className={styles.atTheEndJoinTheBattle}>
            <div className={styles.container}>
                <h2 className={styles.hText}><span style={{color: "#ffffff90",  fontSize: "70px"}}>Join the</span><br/>Battle</h2>
                <OrangeLine />
                <Button
                    small={true}
                    buttonText='Play free now'
                    onRelocateToSteam={relocateToSteam}
                />
            </div>
        </div>
    )
}

export default AtTheEndJoinTheBattle