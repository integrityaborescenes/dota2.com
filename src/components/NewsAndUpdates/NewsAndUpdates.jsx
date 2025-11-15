import styles from './NewsAndUpdates.module.scss'
import {useEffect, useState} from "react";

const NewsAndUpdates = () => {
    const [isClicked, setIsClicked] = useState('news')

    const handleClick = () => {
        setIsClicked(prev => (prev === 'news' ? 'updates' : 'news'))
    }

    useEffect(() => {

    }, [isClicked]);

    return (
        <div className={styles.newsAndUpdates}>
            <div className={styles.container}>
                <a
                    onClick={handleClick}
                    className={`
                    ${styles.news}
                    ${isClicked === 'news' ? styles.active : null}
                    `}
                >News</a>
                <a
                    onClick={handleClick}
                    className={`
                    ${styles.updates}
                    ${isClicked === 'updates' ? styles.active : null}
                    `}
                >Updates</a>
            </div>
        </div>
    )
}

export default NewsAndUpdates