import styles from './skills.module.css'
import Image from 'next/image'
import { skills } from "../../pages/api/data"



export default function Skills() {
    return (
        <div className={styles.skills}>
                {skills?.map((item, index) => (
                            <div key={index} className={styles.skillbox}>
                                <Image className={styles.iconh} src={item.icon} alt="" width={item.width} height={item.height} />
                                <h2 className={styles.skilllvl}>{item.skillLevel}</h2>
                            </div>
        ))}
        </div>


    
    )
}