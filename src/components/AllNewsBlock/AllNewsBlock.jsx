import {newsData} from '@/components/LatestNews/newsData.js'
import NewsBlock from "@/components/LatestNews/NewsBlock/NewsBlock.jsx";
import useCountPages from "@/assets/hooks/useCountPages.js";
import {useState} from "react";
import styles from './AllNewsBlock.module.scss'
import {Link} from "react-router";


const AllNewsBlock = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {newsPages,c} = useCountPages


    return (
        <div className={styles.allNewsBlock}>
            <div className={styles.newsColumn}>
                {currentPage !==1 &&
                    newsData.filter((x,index) => index > c*currentPage-c-1 && index < c * currentPage).map
                    ((x) =>
                        (   <Link to={`/news/${x.id}`}
                            state={x}>
                            <NewsBlock newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>
                            </Link>
                        )
                    )
                }
                {currentPage === 1 &&
                    newsData.filter((x,index) => index < c * currentPage).map
                    ((x) =>
                        (<Link to={`/news/${x.id}`}
                               state={x}>
                            <NewsBlock
                                newsImage={x.newsImage} newsTitle={x.newsTitle} newsText={x.newsText} newsDate={x.newsDate} key={x.newsTitle}/>
                            </Link>
                        )
                    )
                }
            </div>
            <div className={styles.pages}>
                <div className={`
                ${styles.page}
                ${currentPage === 1 ? styles.invisible : null}
                `}
                     onClick={() => setCurrentPage(1)}
                >{'<'}</div>
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
                <div className={`
                ${styles.page}
                ${currentPage === newsPages.length ? styles.invisible : null}
                `}
                     onClick={() => setCurrentPage(newsPages.length)}
                >{'>'}</div>
            </div>
        </div>
    )
}

export default AllNewsBlock