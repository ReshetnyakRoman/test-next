import Layout from "../components/layout";
import Head from "next/head";
import React from "react";
import utilStyles from "../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Page not found, he he</title>
      </Head>
      <>
        <h1 className={utilStyles.headingXl}>This is custom 404 page</h1>
        <br />
        <p>Requested page does not exist, he he he</p>
      </>
    </Layout>
  );
}
