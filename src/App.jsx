import Header from "./components/Header/Header.jsx";
import Video from "./components/BackgroundVid/Video.jsx";
import MainDownloadOnSteam from "./components/MainDownloadOnSteam/MainDownloadOnSteam.jsx";
import LatestNews from "./components/LatestNews/LatestNews.jsx";

const App = () => {
    return (
        <>
            <Header />
            <Video />
            <MainDownloadOnSteam />
            <LatestNews />
        </>
    )
}

export default App