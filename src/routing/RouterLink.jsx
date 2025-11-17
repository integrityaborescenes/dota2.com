import {BASE_URL} from "@/routing/index.js";

const RouterLink = ({to, children}) => {

    const handleClick = (e) => {

        e.preventDefault()
        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <a href={`${BASE_URL}${to}`} onClick={handleClick}>
            {children}
        </a>
    )
}

export default RouterLink