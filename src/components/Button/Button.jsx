import styles from "./Button.module.scss";


const Button = ({buttonText,onRelocateToSteam,small}) => {
    return (
        <button
            className={`
            ${styles.button}
            ${small ? styles.smallBtn : ''}
            `}
            onClick={onRelocateToSteam}
        >
                <p>{buttonText}</p>
        </button>
    )
}

export default Button