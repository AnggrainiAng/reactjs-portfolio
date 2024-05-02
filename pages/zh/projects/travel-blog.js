import React from "react";
import Head from "next/head";
import Nav from "../../../components/zh/nav";
import Footer from "../../../components/zh/footer";
import Image from "next/image";
import blog from "../../../public/6.png";

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
              Travel Ease Blog
            </h1>
            <p className="text-md mb-16 dark:text-white">
              {` Travel Ease 是一个使用 Next.js、Flowbite 构建的动态博客
              顺风顺水，知足常乐。 这种强大的组合赋予您力量
              创建一个视觉上令人惊叹且高性能的旅游博客。 使用
              Next.js，您可以获得服务器端渲染和优化的路由， Flowbite Tailwind
              提供灵活且响应迅速的样式 框架。 Contentful 充当无头 CMS，让您能够
              轻松管理和交付您的内容。 无论你是
              分享旅行故事、提示或目的地指南，Travel Ease
              为您提供无缝、愉快的阅读体验 观众。`}
            </p>
            <div className="mb-10">
              <Image
                src={blog}
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
