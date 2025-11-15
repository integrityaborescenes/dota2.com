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
                <h3>Dota x Monster Hunter</h3>
                <div className={styles.readMore}>
                    <p>Read more</p>
                    <img className={styles.arrowRight} src={arrowLeft} loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost