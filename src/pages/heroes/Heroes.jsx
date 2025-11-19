import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ChooseYourHero from "@/components/ChooseYourHero/ChooseYourHero.jsx";
import {useEffect} from "react";


const Heroes = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    useEffect(() => {
        document.title = 'Dota 2 Heroes'
    }, []);
    return (
        <>
            <Header active={'heroes'}/>
                <main>
                    <ChooseYourHero />
                </main>
            <Footer />
        </>
    )
}

export default Heroes