import styles from './NewsBlock.module.scss'

const NewsBlock = ({newsImage,newsDate,newsTitle,newsText,smallBlock, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`
        ${styles.newsBlock}
        ${smallBlock === true ? styles.smallBlock : false}
        `}
        >
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