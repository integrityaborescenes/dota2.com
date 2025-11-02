import styles from './Video.module.scss'

const Video = () => {

   return (
       <div>
           <video autoPlay muted loop playsInline preload="auto" className={styles.videoBlock}>
                <source type="video/webm" src="/src/assets/video/dota_video1.mp4"/>
                <source type="video/mp4" src="/src/assets/video/dota_video1.mp4"/>
           </video>
       </div>
   )
}

export default Video