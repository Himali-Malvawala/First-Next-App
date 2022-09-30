import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OccSaviors NFT</title>
        <meta
          name="description"
          content="OccSaviors is a Community Based Occupational Health Ecosystem for Web3. Our mission to those that have been affected in the past and to “Be Their Voice” to bring awareness and education."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Testing" />
        <meta
          name="twitter:description"
          content="OccSaviors is a Community Based Occupational Health Ecosystem for Web3. Our mission to those that have been affected in the past and to “Be Their Voice” to bring awareness and education."
        />
      </Head>

      <main className={styles.main}>
        <p>
          Hello <FontAwesomeIcon height={10} width={10} icon={faTwitter} />{" "}
          World!
        </p>
      </main>
    </div>
  );
}
