import styles from './instagram.module.css'
import { posts } from "../../pages/api/data"
import Image from 'next/image'

export default function Instagram() {
    return(
        <div className={styles.insSection}>
            <h2 className={styles.instaid}><a href='https://www.instagram.com/afraself/' target={"_blank"} rel="noreferrer">@AFRA.SELF</a></h2>
            <div className={styles.postscontainer}>

                {posts.map((item, index) => (
                            <div key={index} className={styles.postbox}>
                                <img className={styles.post} src={item.postCover} alt={item.postId} />
                            </div>
        ))}

            </div>
        </div>
    )

}