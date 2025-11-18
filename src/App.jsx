import Router from "@/routing/Router.jsx";
import Home from './pages/home/Home.jsx'
import News from './pages/news/News.jsx'
import SpecificNews from "@/pages/specific news/SpecificNews.jsx";
import Heroes from "@/pages/heroes/Heroes.jsx";

const App = () => {
    const routes = {
        '/': Home,
        '/news': News,
        '/news/:id': SpecificNews,
        '/heroes': Heroes,
        '*': Home,
    }

    return (
        <Router routes={routes} />
    )
}

export default App