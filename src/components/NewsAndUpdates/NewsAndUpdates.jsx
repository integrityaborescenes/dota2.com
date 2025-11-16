import styles from './NewsAndUpdates.module.scss'
import {useEffect, useState} from "react";

const NewsAndUpdates = ({active, onChange}) => {
    const [isClicked, setIsClicked] = useState('news')

    const handleClick = (tab) => {
        setIsClicked(tab)
        onChange(tab);
    }

    return (
        <div className={styles.newsAndUpdates}>
            <div className={styles.container}>
                <a
                    onClick={() => {
                        handleClick('news');
                    }}
                    className={`
                    ${styles.news}
                    ${isClicked === 'news' ? styles.active : null}
                    `}
                >
                    News
                </a>
                <a
                    onClick={() => {
                        handleClick('updates');
                    }}
                    className={`
                    ${styles.updates}
                    ${isClicked === 'updates' ? styles.active : null}
                    `}
                >
                    Updates
                </a>
            </div>
        </div>
    )
}

export default NewsAndUpdates