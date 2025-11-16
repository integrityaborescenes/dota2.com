import {updatesData} from "@/components/UpdatesBlock/updatesData.js";
import styles from './UpdatesBlock.module.scss'

const UpdatesBlock = () => {

    return (
        <div className={styles.updatesBlock}>
            <div className={styles.updatesColumn}>
                {updatesData.map((update, index) => (
                    <div key={index} className={styles.update}>
                        <span>{update.date}</span>
                        <h3>{update.update}</h3>
                        {update.text && <p>{update.text}</p>}
                        {update.text2 && <p>{update.text2}</p>}
                        {update.items && (
                            <ul>
                                {update.items.map((item, i) => (
                                    <p> <li key={i}>
                                        {item.li}

                                        {item.sub && (
                                            <ul>
                                                {item.sub.map((s, j) => (
                                                    <p><li key={j}>{s}</li></p>
                                                ))}
                                            </ul>
                                        )}
                                    </li> </p>
                                ))}
                            </ul>
                        )}
                        {update.li && (
                            <ul>
                                {update.li.map((line, i) => (
                                    <p><li key={i}>{line}</li></p>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default UpdatesBlock