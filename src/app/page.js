import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './header'
import Skills from './copms/skills'
import Works from './copms/works'
import Instagram from './copms/instagram'
import Message from './copms/message'
import Social from './copms/social'
import Footer from './copms/footer'
// import reacticon from '../public/reacticon.png'
import localFont from '@next/font/local'
const Rokh = localFont({ src:[{path: './fonts/Rokh-ExtraLight.woff2', weight: '100',},
                                 {path: './fonts/Rokh-Regular.woff2', weight: '400',},
                                 {path: './fonts/Rokh-Bold.woff2', weight: '700',},] })

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={Rokh.className}>
      <Header />
      <div className={styles.main}>
        <h3 className={styles.pos}>Front-end Developer</h3>
        <h1 className={styles.name}>محمد افرا</h1>
        <div className={styles.myimage}><p className={styles.kanash}>悲しい</p></div>
        <p className={styles.desc}>
          <span className={styles.past}>どうしたの</span>
        من محمد افرا ـم ، توسعه دهنده فرانت اند و  <br />
         دیزاینر و گاهی موشن دیزاینر ، اوایل سال 2021 <br />
         وارد دنیایی وب و برنامه نویسی وب شدم و قدم<br />
          های فرانت اند دولوپر شدن رو یکی یکی طی کردم <br />
          ،  و درحال کار با ری اکت جی اس هستم<br />
          </p>
          <img src='/overlay-3.png' alt='overlay' className={styles.ove} draggable='false' />
      </div>
      {/* <div className={styles.spacer}><Image src="/space-1.svg" alt="spacer" width={1004} height={100} /></div> */}
      <div className={styles.spacebox}><img className={styles.spacerr} src='/space-1.svg' alt='spacer'></img></div>

      <Skills />
      <div className={styles.spacer}><img className={styles.star} src='/spacer-2.png' draggable='false' alt='spacer'></img></div>

      <Works />
      <Instagram />
      <Message />
      <Social />
      <Footer />

    </main>
  )
}

