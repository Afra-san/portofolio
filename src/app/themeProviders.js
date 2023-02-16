"use client"
import { useTheme } from 'next-themes'
import styles from './header.module.css'


export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? theme : theme;


  return (
    <div className={styles.themeicon}>
    {/* The current theme is: {theme} */}

    {
      currentTheme === 'dark' ? (
        // <button onClick={() => setTheme('light')}>Light Mode</button>
        <a onClick={() => setTheme('light')} ><img className={styles.darkmod} src="/lightmod-icon.svg" alt="An SVG of an Dark mod" /></a>




      ) : (
        <a onClick={() => setTheme('dark')} ><img className={styles.darkmod} src="/darkmod-icon.svg" alt="An SVG of an Dark mod" /></a>



      )
    }

  </div>

  )
}