import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import WhatIs from "../components/sections/whatis";
import Art from "../components/sections/art";
import ImageContainer from "../components/sections/image";
import Guardians from "../components/sections/guardians";
import SignUp from "../components/sections/signup";
import NavBar from "../components/navbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World of Koto</title>
        <meta name="description" content="Explore the world of Koto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Header />
        <WhatIs />
        <Art />
        <ImageContainer />
        <Guardians />
        <SignUp />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
