import React from "react";
import Head from "next/head";
import twittr from "../../../public/5.png";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "next/image";

export default function discordJS() {
  return (
    <div>
      <Head>
        <title>Anggraini&apos;s Portfolio</title>
        <meta
          name="description"
          content="A Next.js Portfolio built by and built for Anggraini."
        />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-800">
        <section className="px-10">
          <Nav icons="Project" />
          <div className="text-center mx-10">
            <h1 className="font-bold text-2xl text-slate-400 pb-5 dark:text-blue-gray-100">
              Twittr App
            </h1>
            <p className="text-md mb-16 dark:text-white">
              Twittr is a simple social media platform built using React,
              Tailwind CSS, and JSON Server. It allows users to create, read,
              update, and delete (CRUD) tweets in a Twitter-like interface.
            </p>
            <div className="mb-10">
              <Image
                src={twittr}
                alt=""
                className="bg-slate-700 dark:bg-transparent"
              ></Image>
            </div>
            <h1 className="font-bold text-4xl text-slate-500 pb-5 dark:text-blue-gray-100 mt-5">
              Not Open Source Yet
            </h1>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
