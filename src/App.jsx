import Home from './pages/home/Home.jsx'
import News from './pages/news/News.jsx'
import SpecificNews from "@/pages/specific news/SpecificNews.jsx";
import Heroes from "@/pages/heroes/Heroes.jsx";
import {BrowserRouter, Route, Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/news" element={<News />}/>
                <Route path="/news/:id" element={<SpecificNews />} />
                <Route path="/heroes" element={<Heroes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App