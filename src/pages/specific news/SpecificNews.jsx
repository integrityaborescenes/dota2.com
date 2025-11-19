import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import SelectedNews from "@/components/SelectedNews/SelectedNews.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";

const SpecificNews = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const location = useLocation();
    const newsData = location.state
    const [newsInfo,setNewsInfo] = useState(newsData)

    useEffect(() => {
        setNewsInfo(newsData)
        document.title = newsData.newsTitle
    }, [newsData.id]);

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