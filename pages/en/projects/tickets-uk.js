import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import tickets from "../../../public/7.png";
import catalog from "../../../public/1.png";

export default function DiscordWS() {
  const textBox = "font-bold p-1 border-2 rounded-md fill-white";
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
              {`Ticket's UK`}
            </h1>
            <p className="text-md mb-16 dark:text-white">
              Its an event management platform that allows event organizers to
              create and promote events, while attendees can browse and register
              for those events.
            </p>
            <div className="mb-10">
              <Image
                src={tickets}
                alt=""
                className="bg-slate-700 dark:bg-transparent"
              ></Image>
            </div>
            <div className="mb-3">
              <Image
                src={catalog}
                alt=""
                className="bg-slate-700 dark:bg-transparent"
              ></Image>
              <h1 className="font-bold text-4xl text-slate-500 pb-5 dark:text-blue-gray-100 mt-5">
                Not Open Source Yet
              </h1>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
