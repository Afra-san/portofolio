import styles from './social.module.css'
import { poppins } from '../layout'

export default function Social() {
    return(
        <div className={styles.socialsection}>
            <a href='https://www.github.com/afra-san' target={'_blank'} rel="noreferrer">
                <div className={`${styles.socialcard} ${poppins.className}`}>
                    <h1 className={styles.sotitle}>GitHub<p className={styles.sop}>project’s</p></h1>
                    <img className={styles.cardicon} src='/gh.svg' alt='github'></img>
                </div>
            </a>
            
            <a href='https://twitter.com/afranistam' target={'_blank'} rel="noreferrer">
                <div className={styles.twitter}>
                    <div className={styles.twbox1}>
                        <div className={styles.twpf}>
                            <img className={styles.twprofile} src='/twitterprof.png' alt='twitterprof'></img>
                        <div>
                            <h2 className={styles.twname}>Afra</h2><p className={styles.twid}>@Afranistam</p></div>
                        </div>
                        <img className={styles.twlogo} src='/twlogo.png' alt='twlogo'></img>               
                    </div>
                    <div className={styles.twtext}>
                        <p className={styles.twt}>هیچ چیز دائمی نیست</p>
                        <img className={styles.twsp} src='/twsp.svg' alt='tscpace'></img>
                    </div>
                    <div className={styles.twfoo}>
                        <div className={styles.likebox}>
                            <img className={styles.like} src='/like.png' alt="like"></img>
                            <p className={styles.twc}>603</p>
                        </div>
                        <div className={styles.likebox}>
                            <img className={styles.like} src='/replay.svg' alt="replay"></img>
                            <p className={styles.twc}>121</p>
                        </div>
                    </div>
                </div>
            </a>

            <a href='https://dribbble.com/AfraEndo' target={'_blank'} rel="noreferrer">
              <div className={`${styles.socialcard} ${poppins.className}`}>
                <h1 className={styles.sotitle}>Diribbble<p className={styles.sop}>Desgine’s</p></h1>
                <img className={styles.soicon} src='/dribbble.svg' alt='dribbble'></img>
              </div>
            </a>

        </div>
    )
}