import Image from 'next/image'
import { works } from '../../pages/api/data'
import styles from './works.module.css'

export default function Works() {
    return(
        <div className={styles.workscontainer}>
            <div className={styles.workdiv2}>
                <h1 className={styles.workstitle}>نمونه کارهای من</h1>
                <div className={styles.worksbox}>
                    {
                        works.map((item, index) => (
                            <div className={styles.projectbox} key={index}>
                            <div className={styles.contentbx}>
                              <ul className={styles.sci}>
					            <li>
                                   <a className={styles.contentxt} href={item.repo}>Repo</a>

					            </li>
					            <li>
                                   <a className={styles.contentxt} href={item.demo}>Demo</a>
					            </li>
				              </ul>
                            </div>
                            <img src={item.projectImg} alt='project' className={`${styles.radius} ${styles.projectcover}`}/>
                            <h2 className={styles.projecttitle}>{item.projectName}</h2>
                          </div>
                        ))
                    }

                </div>
                <img src='/overlay-3.png' alt='overlay' draggable='false' className={styles.over} />

            </div>
        </div>

    )
}