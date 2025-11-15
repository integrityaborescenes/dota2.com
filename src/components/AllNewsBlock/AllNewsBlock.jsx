import {newsData} from '@/components/LatestNews/newsData.js'
import styles from './AllNewsBlock.module.scss'
import NewsBlock from "@/components/LatestNews/NewsBlock/NewsBlock.jsx";


const AllNewsBlock = () => {
    return (
        <div className={styles.allNewsBlock}>
            <div className={styles.newsColumn}>
                {newsData.filter((x,index) => index < 15).map((x) => (
                    <NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>
                ))}
            </div>
            {/*<div className={styles.pages}>*/}
            {/*    */}
            {/*</div>*/}
        </div>
    )
}

export default AllNewsBlock