import {newsData} from '@/components/LatestNews/newsData.js'
import styles from './FeaturedPost.module.scss'
import arrowLeft from "@/assets/images/arrow_left.png";
import {BASE_URL} from "@/routing/index.js";
import RouterLink from "@/routing/RouterLink.jsx";

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
                    <RouterLink
                        to={`${BASE_URL}news/${newsData[0].id}`}
                        aria-label="Specific news"
                    >
                        <p>Read more</p>
                    </RouterLink>
                    <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost