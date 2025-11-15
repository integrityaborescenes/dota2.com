import Header from "@/components/Header/Header.jsx";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import NewsAndUpdates from "@/components/NewsAndUpdates/NewsAndUpdates.jsx";
import AllNewsBlock from "@/components/AllNewsBlock/AllNewsBlock.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const News = () => {
    return (
        <>
            <Header />
            <FeaturedPost />
            <NewsBackgroundHeader />
            <NewsAndUpdates/>
            <AllNewsBlock />

            <Footer />
        </>
    )
}

export default News