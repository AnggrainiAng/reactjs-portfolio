import React from "react";
import Head from "next/head";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function DBDashboard() {
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
            <h1 className="font-bold text-slate-400 text-2xl pb-5 dark:text-blue-gray-100">
              Dev Overflow
            </h1>
            <p className="text-md mb-16 dark:text-white">
              {` DevFlow is an app similar to StackOverflow, built using Next.js 14
              with Server Actions and a variety of other technologies. It's
              designed to facilitate developer collaboration, problem-solving,
              and knowledge-sharing within the geek community. Key features include global search, sorting/filtering via URL, voting, and full responsiveness.`}
            </p>
            <p className="dark:text-white">
              Visit the full site{" "}
              <Link href="https://stack-overflow-nextjs13-8xmcie9cd-anggrainiangs-projects.vercel.app/">
                <span className="text-blue-gray-100 dark:text-cyan-500">
                  here!
                </span>
              </Link>
            </p>
          </div>
          <div className="flex justify-center my-8">
            <iframe
              src="https://stack-overflow-nextjs13-8xmcie9cd-anggrainiangs-projects.vercel.app/"
              width={1240}
              height={720}
              name="DevFlow"
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
