import React from "react";
import Head from "next/head";
import Nav from "../../../components/zh/nav";
import Footer from "../../../components/zh/footer";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Anggraini 的作品集</title>
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
              {" "}
              Uptown 理发店{" "}
            </h1>
            <p className="text-md text-black dark:text-white">
              这个作品集最初是为了学习如何使用 Next.js
              制作一个简单的公司简介网站随着我的进步，
              我成功地获得了具有漂亮元素的响应式网站，并展示了我继续提高前端开发技能的能力。
            </p>
            <p className="text-md text-black dark:text-white">
              <Link href="https://anggi-company-profile.vercel.app/">
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
