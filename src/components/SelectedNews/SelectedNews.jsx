import styles from './SelectedNews.module.scss'
import arrowLeft from "@/assets/images/arrow_left.png";
import {newsData} from "@/components/LatestNews/newsData.js";
import NewsBlock from "@/components/LatestNews/NewsBlock/NewsBlock.jsx";
import BackgroundBody from "@/components/BackgroundBody/BackgroundBody.jsx";
import {BASE_URL} from "@/routing/index.js";
import RouterLink from "@/routing/RouterLink.jsx";

const SelectedNews = ({newsInfo}) => {
    return (
        <div className={styles.selectedNews}>
            <BackgroundBody />
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.backToNews}>
                        <img className={styles.arrowLeft} src={arrowLeft} loading="lazy"/>
                        <p>Back to news</p>
                    </div>
                    <div className={styles.postInfo}>
                        <h2>{newsInfo.newsTitle}</h2>
                        <span>{newsInfo.newsDate}</span>
                    </div>
                </div>
                <div className={styles.postContainer}>
                    <img className={styles.image} src={newsInfo.newsImage} loading="lazy"/>
                    <div className={styles.postText}>
                        {newsInfo.fullText.map((p) => <p key={p.id}>{p}</p>)}
                    </div>
                </div>
                <div className={styles.latestNews}>
                    <p className={styles.pText}>Latest news</p>
                    <div className={styles.newsRow}>
                        {newsData.filter((x,index) => index < 4 && x.id !== newsInfo.id).map((x) => (
                            <RouterLink
                                to={`${BASE_URL}news/${x.id}`}
                                aria-label="Specific news"
                            >
                                <NewsBlock
                                    newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>
                            </RouterLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedNews