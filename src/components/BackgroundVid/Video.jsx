import dotaVideo1 from '@/assets/video/dota_video1.mp4';
import dotaVideo2 from '@/assets/video/dota_video1.webm';
import styles from './Video.module.scss'

const Video = () => {

   return (
       <div>
           <video autoPlay muted loop playsInline preload="auto" className={styles.videoBlock}>
                <source type="video/webm" src={dotaVideo2}/>
                <source type="video/mp4" src={dotaVideo1}/>
           </video>
       </div>
   )
}

export default Video