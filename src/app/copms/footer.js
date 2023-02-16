import styles from './social.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
           <span className={styles.date}>
              {`© ${new Date().getFullYear()} Afra - アフラ.`}
            </span>
        </footer>
    )
}