"use client"
import './globals.css'
import './fonts/font.css'
// import localFont from '@next/font/local'
import { Poppins } from '@next/font/google'
// export const poppins = Poppins({
//   subsets: ['latin'],
//   weight: '500'
// })
export const poppins = Poppins({ 
              subsets: ['latin'],
               weight: ["400",'500','600','700','800'],
               variable: '--poppins-font', 
})


               
// const Rokh = localFont({ src:[{path: './fonts/Rokh-ExtraLight.woff2', weight: '100',},
//                                 {path: './fonts/Rokh-Regular.woff2', weight: '400',},
//                                 {path: './fonts/Rokh-Bold.woff2', weight: '700',},] })
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  )
}
