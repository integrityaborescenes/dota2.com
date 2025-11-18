import Header from "@/components/Header/Header.jsx";
import Video from "@/components/BackgroundVid/Video.jsx";
import MainDownloadOnSteam from "@/components/MainDownloadOnSteam/MainDownloadOnSteam.jsx";
import LatestNews from "@/components/LatestNews/LatestNews.jsx";
import JoinTheBattle from "@/components/JoinTheBattleBlock/JoinTheBattle.jsx";
import WhoWillYouChoose from "@/components/WhoWillYouChoose/WhoWillYouChoose.jsx";
import AtTheEndJoinTheBattle from "@/components/AtTheEndJoinTheBattle/AtTheEndJoinTheBattle.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const Home = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return (
        <>
            <Header />
            <Video />
            <MainDownloadOnSteam />
            <LatestNews />
            <JoinTheBattle />
            <WhoWillYouChoose />
            <AtTheEndJoinTheBattle />
            <Footer />
        </>
    )
}

export default Home