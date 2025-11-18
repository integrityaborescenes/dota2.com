import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ChooseYourHero from "@/components/ChooseYourHero/ChooseYourHero.jsx";


const Heroes = () => {

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