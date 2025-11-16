import {newsData} from '@/components/LatestNews/newsData.js'
import NewsBlock from "@/components/LatestNews/NewsBlock/NewsBlock.jsx";
import useCountPages from "@/assets/hooks/useCountPages.js";
import {useCallback, useEffect, useState} from "react";
import styles from './AllNewsBlock.module.scss'


const AllNewsBlock = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {newsPages,c} = useCountPages


    return (
        <div className={styles.allNewsBlock}>
            <div className={styles.newsColumn}>
                {currentPage !==1 &&
                    newsData.filter((x,index) => index > c*currentPage-c-1 && index < c * currentPage).map
                    ((x) =>
                        (<NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>)
                    )
                }
                {currentPage === 1 &&
                    newsData.filter((x,index) => index < c * currentPage).map
                    ((x) =>
                        (<NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>)
                    )
                }
            </div>
            <div className={styles.pages}>
                {newsPages.map((p,i) => (
                <div
                    key={i}
                    className={`
                    ${styles.page}
                    ${currentPage === +p+1 ? styles.active : null}
                    `}
                    onClick={() => setCurrentPage(+p+1)}
                >
                    {+p+1}
                </div>))}
            </div>
        </div>
    )
}

export default AllNewsBlock