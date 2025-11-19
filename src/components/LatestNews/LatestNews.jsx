import NewsBlock from "./NewsBlock/NewsBlock.jsx";
import styles from './LatestNews.module.scss'
import {newsData} from './newsData.js'
import arrowLeft from '@/assets/images/arrow_left.png'
import {Link} from "react-router";

const LatestNews = () => {
    return (
        <div className={styles.latestNewsBlock}>
            <div className={styles.latestNews}>
                <p>Latest news</p>
                <Link to={`/news`}>
                    <div className={styles.viewAll}>
                        <span>View All</span>
                        <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                    </div>
                </Link>
            </div>
            <div className={styles.newsBlocks}>
                {newsData.filter((x,index) => index < 3).map((x) => (
                    <Link
                        to={`news/${x.id}`}
                        state={x}
                    >
                        <NewsBlock
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle} smallBlock={true}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LatestNews