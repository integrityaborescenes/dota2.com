import styles from "./Button.module.scss";


const Button = ({buttonText,onRelocateToSteam}) => {
    return (
        <button
            className={styles.button}
            onClick={onRelocateToSteam}
        >
                <p>{buttonText}</p>
        </button>
    )
}

export default Button