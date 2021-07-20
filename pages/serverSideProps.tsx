/**
 * @author Vighnesh Raut <rvighnes@amazon.com>
 */

import React from "react";
import Head from "next/head";
import {GetServerSideProps} from "next";
import Link from "next/link";

interface StaticProps {
  time: string;
}

const ServerSidePropsPage: React.FC<StaticProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="This is the homepage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Link href={'/staticProps'}>Static props</Link>
        </nav>

        <br />

        <h1>Hello world!</h1>

        <section>
          <p>Server side prop time: {props.time}</p>
          <p>Server side props are set during each request the html is build everytime. The above is a server-side prop.</p>
        </section>
      </main>
    </div>
  );
};

export default ServerSidePropsPage;

export const getServerSideProps: GetServerSideProps<StaticProps> = async (context) => {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
  };
};

