import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
