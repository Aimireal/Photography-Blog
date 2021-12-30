import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Head>
        
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          OKDPhotography
        </h1>

        <p className={styles.description}>
          Nature / Urban photographer | Based in Yorkshire
        </p>

        <div className='flex py-3'>
          <Plane className='transform rotate-90'/>
          <Link href='/GalleryPage'>
          <a className='font-bold pl-2.5 flex items-center hover:text-gray-400 hover:underline'>Go to the Gallery</a>
          </Link>
      </div>
      </main>
      <Footer/>
    </div>
  )
}

function Plane(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      width="2rem"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        fill="#FDE68A"
        stroke="#FBBF24"
        strokeWidth="2"
        />
      </svg>
  )
}