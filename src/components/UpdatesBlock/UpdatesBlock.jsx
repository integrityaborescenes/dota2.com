import {updatesData} from "@/components/UpdatesBlock/updatesData.js";
import styles from './UpdatesBlock.module.scss'

const UpdatesBlock = () => {

    return (
        <div className={styles.updatesBlock}>
            <div className={styles.updatesColumn}>
                <div className={styles.update}>
                    <span>{updatesData.date}</span>
                    <h3>{updatesData.update}</h3>
                    <p>{updatesData.text}</p>
                    <ul>
                        <li style={{color: 'gray'}}><p>{updatesData.li}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default UpdatesBlock