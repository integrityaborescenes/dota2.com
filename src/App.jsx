import Router from "@/routing/Router.jsx";
import Home from './pages/home/Home.jsx'
import News from './pages/news/News.jsx'
import SpecificNews from "@/pages/specific news/SpecificNews.jsx";

const App = () => {
    const routes = {
        '/': SpecificNews,
        '/news': News,
        '*': Home,
    }

    return (
        <Router routes={routes} />
    )
}

export default App