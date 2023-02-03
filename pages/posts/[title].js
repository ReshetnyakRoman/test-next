import { localFetcher } from "../../lib/local-fetcher";
import useWSR from "swr";
import Layout from "../../components/layout";
import Head from "next/head";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import { products } from "../../__fixtures__/products";

export default function FirstPost({ title }) {
  const { data, error, isLoading, isValidating } = useWSR(title, localFetcher, {
    revalidateOnFocus: false,
    keepPreviousData: false,
    shouldRetryOnError: true
  });

  const post = async function () {
    fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: JSON.stringify({ im: "from body" })
    })
      .then((res) => res.json())
      .then((response) => alert(response.text));
  };

  const get = async function () {
    fetch("http://localhost:3000/api/get?kenny=killed&you=bastards")
      .then((res) => res.json())
      .then((response) => alert(response.text));
  };

  return (
    <Layout>
      <Head>
        <title>Title {title}</title>
      </Head>
      <>
        <h1 className={utilStyles.headingXl}>
          I`m staticaly rendered title with name {title}
        </h1>
        <br />
        <h1 className={utilStyles.headingMd}>
          This is client side rendered part
        </h1>
        <br />
        {error && !isValidating && <div>failed to load: {error}</div>}
        {(isLoading || isValidating) && "loading..."}
        {data && !isValidating && !error && (
          <p className={utilStyles.lightText}>{data}</p>
        )}
        <br />
        <button onClick={post}>Lets post it</button>
        <br />
        <button onClick={get}>Lets get it</button>
      </>
    </Layout>
  );
}

export async function getStaticPaths() {
  let paths;
  try {
    const res = products;
    paths = res.map((product) => ({ params: { title: `${product.name}` } }));
  } catch {
    // How to handle error herer????
    paths = [];
  }
  console.log("paths", paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(props) {
  console.log("props", props);
  return {
    props: {
      title: props.params.title
    }
  };
}
