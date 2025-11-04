import styles from "./Button.module.scss";


const Button = ({buttonText}) => {
    return (
        <button className={styles.button}>
                <p>{buttonText}</p>
        </button>
    )
}

export default Button