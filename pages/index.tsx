import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <section className={styles.display}>
          <h1 className={styles.title}>Rock Paper Scissors</h1>
          <div className={styles.score_container}>
            <span className={styles.score_label}>Score</span>
            <p className={styles.score}>12</p>
          </div>
        </section>
        <section className={styles.game_container}>
          <div className={styles.game_option_container}>
            <button className={styles.game_option}>
              <Image src='/images/icon-paper.svg' height={80} width={65} alt='paper-option' />
            </button>
          </div>
          <div className={styles.game_option_container}>
            <button className={styles.game_option}>
              <Image src='/images/icon-scissors.svg' height={80} width={65} alt='paper-option' />
            </button>
          </div>

          <div className={styles.game_option_container}>
            <button className={styles.game_option}>
              <Image src='/images/icon-rock.svg' height={67} width={60} alt='paper-option' />
            </button>
          </div>
        </section>
        <button className={styles.rules_button}>Rules</button>
      </main>
    </div>
  )
}

export default Home
