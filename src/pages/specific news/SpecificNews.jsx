import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import SelectedNews from "@/components/SelectedNews/SelectedNews.jsx";
import BackgroundBody from "@/components/BackgroundBody/BackgroundBody.jsx";

const SpecificNews = () => {
    return (
        <>
            <BackgroundBody />
            <Header />
            <NewsBackgroundHeader isSpecific={true}/>
            <main>
                <SelectedNews />
            </main>
            <Footer />
        </>
    )
}

export default SpecificNews