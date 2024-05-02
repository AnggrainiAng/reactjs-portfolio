import React from "react";
import Head from "next/head";
import Nav from "../../../components/zh/nav";
import Footer from "../../../components/zh/footer";
import Image from "next/image";
import twittr from "../../../public/5.png";

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
              Twittr 是一个使用 React 构建的简单社交媒体平台， Tailwind CSS 和
              JSON 服务器。 它允许用户创建、阅读、 在类似 Twitter
              的界面中更新和删除 (CRUD) 推文。
            </p>
            <div className="mb-10">
              <Image
                src={twittr}
                alt=""
                className="bg-slate-700 dark:bg-transparent"
              ></Image>
            </div>
            <h1 className="font-bold text-4xl text-slate-500 pb-5 dark:text-blue-gray-100 mt-5">
              暂未开源
            </h1>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
