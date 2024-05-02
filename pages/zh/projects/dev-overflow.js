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
              DevFlow 是一款类似于 StackOverflow 的应用程序，使用 Next.js 14
              以及服务器操作和各种其他技术构建。
              它旨在促进开发人员协作、解决问题、 以及极客社区内的知识共享。
              主要功能包括全局搜索、通过 URL 排序/过滤、投票和全面响应。
            </p>
            <p className="text-md text-black dark:text-white">
              <Link href="https://stack-overflow-nextjs13-8xmcie9cd-anggrainiangs-projects.vercel.app/">
                <span className="text-blue-gray-100 dark:text-cyan-500">
                  {" "}
                  点击这里{" "}
                </span>
              </Link>
              就可以访问完整的网站啦！
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
