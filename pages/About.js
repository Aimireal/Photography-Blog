import Head from 'next/head'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function About() {
    return(
        <div className={styles.container}>
            <Header/>
            <Head>

            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Who is OKDPhotography?
                </h1>
                <p className={styles.description}>
                    I am a graduate of The Northern Film School based in Leeds, 
                    and a hobbyist photographer specialising in wildlife.
                </p>
                <p className={styles.description}>
                    I have worked on a number of student films, as well as worked
                    on hobby projects such as........
                </p>
            </main>
            <Footer/>
        </div>
    )
}