import Header from "@/components/Header/Header.jsx";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import NewsAndUpdates from "@/components/NewsAndUpdates/NewsAndUpdates.jsx";
import AllNewsBlock from "@/components/AllNewsBlock/AllNewsBlock.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import UpdatesBlock from "@/components/UpdatesBlock/UpdatesBlock.jsx";
import {useState} from "react";

const News = () => {
    const [whatTab, setWhatTab] = useState('news')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return (
        <>
            <Header active={'news'}/>
            <main>
                <FeaturedPost />
                <NewsBackgroundHeader />
                <NewsAndUpdates onChange={(current) => setWhatTab(current)} />
                {whatTab === 'news' && <AllNewsBlock />}
                {whatTab === 'updates' && <UpdatesBlock />}
            </main>
            <Footer />
        </>
    )
}

export default News