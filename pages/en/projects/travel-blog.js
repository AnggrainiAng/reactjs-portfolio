import React from "react";
import Head from "next/head";
import blog from "../../../public/6.png";
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
              Travel Ease Blog
            </h1>
            <p className="text-md mb-16 dark:text-white">
              {`Travel Ease is a dynamic blog built using Next.js, Flowbite
              Tailwind, and Contentful. This powerful combination empowers you
              to create a visually stunning and high-performing travel blog.
              With Next.js, you get server-side rendering and optimized routing,
              while Flowbite Tailwind provides a flexible and responsive styling
              framework. Contentful serves as the headless CMS, allowing you to
              effortlessly manage and deliver your content. Whether you're
              sharing travel stories, tips, or destination guides, Travel Ease
              offers a seamless and enjoyable reading experience for your
              audience.`}
            </p>
            <div className="mb-10">
              <Image
                src={blog}
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
