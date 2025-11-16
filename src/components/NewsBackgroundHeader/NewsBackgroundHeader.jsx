import styles from './NewsBackgroundHeader.module.scss'

const NewsBackgroundHeader = ({isSpecific}) => {
    return (
        <div className={`
        ${styles.backgroundHeader}
        ${isSpecific === true ? styles.specific : null}
        `}></div>
    )
}
export default NewsBackgroundHeader