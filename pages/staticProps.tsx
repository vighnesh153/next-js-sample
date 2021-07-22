/**
 * @author Vighnesh Raut <rvighnes@amazon.com>
 */

import React from "react";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from "next";

interface StaticProps {
  time: string;
}

const StaticPropsPage: React.FC<StaticProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="This is the homepage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Link href={'/serverSideProps'}>Server-side props</Link>
        </nav>

        <br />

        <h1>Hello world!</h1>

        <section>
          <p>Static prop time: {props.time}</p>
          <p>Static props are set during the build time. The above is a static prop.</p>
        </section>
      </main>
    </div>
  );
};

export default StaticPropsPage;

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
    // This page will be re-built every 20 seconds
    revalidate: 20,
  };
};
