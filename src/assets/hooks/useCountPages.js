import {newsData} from "@/components/LatestNews/newsData.js";

const useCountPages = (count) => {
    const newsPages = []
    let c = 15
    for (let i = 0; i < newsData.length/c; i++) {
        newsPages.push(i)
    }
    return {newsPages,c}
}

export default useCountPages()