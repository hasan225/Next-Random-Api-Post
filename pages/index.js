import React from "react";
import Styles from "../styles/index.module.css";
import Image from "next/image";
import Head from "next/head";

const index = () => {
  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={Styles.Home}>
        <h1>hello next js</h1>
        <div className={Styles.homeImages}>
          <Image alt="img" width="500" height="300" src="/next.jpeg"></Image>
          <Image
            alt="img"
            width="500"
            height="300"
            src={"https://vitejs.dev/assets/v3-docs.2bb7b882.png"}
          ></Image>
          <Image
            alt="img"
            width="500"
            height="300"
            src={
              "https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png"
            }
          ></Image>
        </div>
      </div>
    </>
  );
};

export default index;
