import {newsData} from '@/components/LatestNews/newsData.js'
import styles from './FeaturedPost.module.scss'
import arrowLeft from "@/assets/images/arrow_left.png";

const FeaturedPost = () => {
    return (
        <div className={styles.featuredPost}>
            <div className={styles.container}>
                <div className={styles.topInfo}>
                    <p>11 Ноября 2025 г.</p>
                    <div className={styles.mark}>Featured Post</div>
                </div>
                {newsData.filter((x,i)=> i<1).map((x)=> <h3 key={x.newsTitle}>{x.newsTitle}</h3>)}
                <div className={styles.readMore}>
                    <p>Read more</p>
                    <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost