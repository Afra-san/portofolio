"use client"
import styles from './header.module.css'
import Image from 'next/image'
// import Darkmod from '../public/Dark-mod-icon.svg'

import ThemeChanger from './themeProviders'



export default function Header() {
    return (
        <headr>
            <div className={styles.header}>
              <div className={styles.left}>
                <a href='#' className={styles.logo}>アフラ</a>
                <ThemeChanger />
                {/* <a href='#'><img className={styles.darkmod} src="/Dark-mod-icon.svg" alt="An SVG of an Dark mod" /></a> */}
                </div>
            </div>


    
        </headr>
 
    )
  }