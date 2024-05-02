import React from "react";
import Head from "next/head";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function Portfolio() {
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
            <h1 className="font-bold text-2xl text-slate-400 pb-5">
              {`Uptown’s Barbershop`}
            </h1>
            <p className="text-md dark:text-white">
              This Portfolio was initially built to learn how to make a simple
              company profilw website using Next.js. As I&apos;m getting better,
              I managed to get responsive website with beautiful element and
              demonstrate my ability to continue to upskill in Front-end
              Development.
            </p>
            <p className="dark:text-white">
              Visit the full site{" "}
              <Link href="https://anggi-company-profile.vercel.app/">
                <span className="text-blue-gray-100 dark:text-cyan-500">
                  here!
                </span>
              </Link>
            </p>
          </div>

          <div className="flex justify-center my-8">
            <iframe
              src="https://anggi-company-profile.vercel.app/"
              width={1240}
              height={720}
              name="HTML Portfolio Website"
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
