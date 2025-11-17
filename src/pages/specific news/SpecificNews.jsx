import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import SelectedNews from "@/components/SelectedNews/SelectedNews.jsx";
import {newsData} from "@/components/LatestNews/newsData.js";
import {useEffect, useState} from "react";

const SpecificNews = () => {
    const newsId = window.location.pathname.split("/").pop()
    const [newsInfo,setNewsInfo] = useState(newsData.find((info) => info.id === newsId))

    useEffect(() => {
        setNewsInfo(newsData.find((info) => info.id === newsId))
    }, [newsId]);

    return (
        <>
            <Header />
            <NewsBackgroundHeader isSpecific={true}/>
            <main>
                <SelectedNews newsInfo={newsInfo}/>
            </main>
            <Footer />
        </>
    )
}

export default SpecificNews