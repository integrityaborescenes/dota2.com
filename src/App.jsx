import Router from "@/routing/Router.jsx";
import Home from './pages/home/Home.jsx'
import News from './pages/news/News.jsx'

const App = () => {
    const routes = {
        '/': Home,
        '/news': News,
        '*': Home,
    }

    return (
        <Router routes={routes} />
    )
}

export default App