import React from "react";
import Image from "next/image";
import styles from "../../styles/components/sections/whatis.module.css";
const WhatIs = () => {
  return (
    <div className={styles.whatiscontainer}>
      <h1 className={styles.whatistitle}>What is world of koto?</h1>
      <div className={styles.whatiscontent}>
        <div className={styles.whatiscontentimagebordercontainer}>
          <div className={styles.whatiscontentimage}>
            <Image
              src={"/art.png"}
              alt="Art"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className={styles.whatiscontenttext}>
          <p className={styles.whatiscontenttitle}>
            The future of art ownership
          </p>
          <p className={styles.whatiscontentparagraph}>
            Every NFT you own in the World of Koto is either 1) an official
            numbered print from an original piece of art or 2) fractional
            ownership token of a real piece of art.
            <br />
            <br />
            The Koto Gallery will allow you to visualise and show off your art
            collection
          </p>
        </div>
      </div>

      <div className={styles.whatissubcontentcontainer}>
        <div className={styles.whatiscontentreverse}>
          <div className={styles.whatiscontentimagebordercontainer}>
            <div className={styles.whatiscontentimage}>
              <Image
                src={"/p2e.png"}
                alt="Art"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className={styles.whatiscontenttext}>
            <p className={styles.whatiscontenttitle}>Play 2 earn game</p>
            <p className={styles.whatiscontentparagraph}>
              <b>Guardians of Koto</b> is the place where art pieces you own
              will come to life in a series of challenging 3D mini games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
