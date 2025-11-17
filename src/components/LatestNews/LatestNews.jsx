import NewsBlock from "./NewsBlock/NewsBlock.jsx";
import styles from './LatestNews.module.scss'
import {newsData} from './newsData.js'
import arrowLeft from '@/assets/images/arrow_left.png'
import {BASE_URL} from "@/routing/index.js";
import RouterLink from "@/routing/RouterLink.jsx";

const LatestNews = () => {
    return (
        <div className={styles.latestNewsBlock}>
            <div className={styles.latestNews}>
                <p>Latest news</p>
                <RouterLink to={`${BASE_URL}news`} aria-label="News page">
                    <div className={styles.viewAll}>
                        <span>View All</span>
                        <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                    </div>
                </RouterLink>
            </div>
            <div className={styles.newsBlocks}>
                {newsData.filter((x,index) => index < 3).map((x) => (
                    <RouterLink
                        to={`${BASE_URL}news/${x.id}`}
                        aria-label="Specific news"
                    >
                        <NewsBlock
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle} smallBlock={true}/>
                    </RouterLink>
                ))}
            </div>
        </div>
    )
}

export default LatestNews