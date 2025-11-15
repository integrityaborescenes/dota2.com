import Header from "@/components/Header/Header.jsx";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost.jsx";
import NewsBackgroundHeader from "@/components/NewsBackgroundHeader/NewsBackgroundHeader.jsx";
import NewsAndUpdates from "@/components/NewsAndUpdates/NewsAndUpdates.jsx";
import AllNewsBlock from "@/components/AllNewsBlock/AllNewsBlock.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import UpdatesBlock from "@/components/UpdatesBlock/UpdatesBlock.jsx";
import {useEffect, useState} from "react";

const News = () => {

    return (
        <>
            <Header />
            <FeaturedPost />
            <NewsBackgroundHeader />
            <NewsAndUpdates  />


            <AllNewsBlock />
            <UpdatesBlock />



            <Footer />
        </>
    )
}

export default News