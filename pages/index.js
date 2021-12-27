import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          OKDPhotography
        </h1>

        <p className={styles.description}>
          Nature / Urban photographer | Based in Yorkshire
        </p>

        <div className={styles.grid}>

        </div>
      </main>
      <Footer/>
    </div>
  )
}
