import styles from './NewsBlock.module.scss'

const NewsBlock = ({newsImage,newsDate,newsTitle,newsText}) => {
    return (
        <div className={styles.newsBlock}>
            <div className={styles.linearGrad}></div>
            <img className={styles.newsBlock__image} src={newsImage} loading="lazy"/>
            <div className={styles.text__container}>
                <div className={styles.text}>
                    <span>{newsDate}</span>
                    <h3>{newsTitle}</h3>
                    <p>{newsText}</p>
                </div>
            </div>
        </div> )

        }

export default NewsBlock