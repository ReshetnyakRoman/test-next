import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { products } from "../__fixtures__/products";

export default function Home({ products }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello this is Roman blog, read, enjoy, have fan</p>
        <br />
        {products.map((product, ix) => (
          <p key={ix}>
            <Link href={`/posts/${product.name}`}>{product.name}</Link>
          </p>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // const props = await getProductsCatalogue();

  const props = {
    products
  };
  return { props };
}
