import NewsBlock from "./NewsBlock/NewsBlock.jsx";
import styles from './LatestNews.module.scss'
import {newsData} from './newsData.js'

const LatestNews = () => {
    return (
        <div className={styles.latestNewsBlock}>
            <div className={styles.latestNews}>
                <p>Latest news</p>
                <div className={styles.viewAll}>
                    <span>View All</span>
                    <img className={styles.arrowRight} src="src/assets/images/arrow_left.png" loading="lazy"/>
                </div>
            </div>
            <div className={styles.newsBlocks}>
                {newsData.map((x) => (
                    <NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle} />
                ))}
            </div>
        </div>
    )
}

export default LatestNews