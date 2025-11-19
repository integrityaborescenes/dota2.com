import {newsData} from '@/components/LatestNews/newsData.js'
import styles from './FeaturedPost.module.scss'
import {Link} from "react-router";
import arrowLeft from '@/assets/images/arrow_left.png'
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
                    <Link
                        to={`/news/${newsData[0].id}`}
                        state={newsData[0]}
                    >
                        <p>Read more</p>
                    </Link>
                    <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost