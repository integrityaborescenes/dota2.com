import styles from './SelectedNews.module.scss'
import arrowLeft from "@/assets/images/arrow_left.png";
import {newsData} from "@/components/LatestNews/newsData.js";
import NewsBlock from "@/components/LatestNews/NewsBlock/NewsBlock.jsx";

const SelectedNews = () => {
    return (
        <div className={styles.selectedNews}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.backToNews}>
                        <img className={styles.arrowLeft} src={arrowLeft} loading="lazy"/>
                        <p>Back to news</p>
                    </div>
                    <div className={styles.postInfo}>
                        <h2>Collector's Cache Voting Open Now</h2>
                        <span>8 октября 2025 г.</span>
                    </div>
                </div>
                <div className={styles.postContainer}>
                    <img className={styles.image} src="./src/assets/images/collectorChest.png" loading="lazy"/>
                    <div className={styles.postText}>
                        <p>No matter what else is happening in the world of Dota, the Community Workshop artists never stop dreaming up cool new item sets for all their favorite heroes. Which of course means the workshop is near-to-bursting with game-worthy sets, and — you guessed it by cleverly reading the title above — we'd love your help choosing which of those awesome sets next make their way into the game.<br/>
                        If that sounds fun, it's easy to chime in. Just jump on into the Dota 2 dashboard, click the Collector's Cache Voting button, and then upvote or downvote the sets as you see fit. Voting is open from now until October 22, so make sure you dig through all the offerings before then. You'll soon see the most popular sets strutting, slithering, and skittering through your lanes.<br/>
                        So many of our updates, ranging from treasures like Collector's Caches and Heroes' Hoards all the way to events like Crownfall, include amazing contributions from our community artists who first and foremost are Dota fans just like you. In this and countless other ways, Dota fans don't just play the game we all love, they help shape it. We hope you'll jump into the voting queue and have your say.</p>
                    </div>
                </div>
                <div className={styles.latestNews}>
                    <p>Latest news</p>
                    <div className={styles.newsRow}>
                        {newsData.filter((x,index) => index < 3).map((x) => (
                            <NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedNews