/**
 * It's a function that returns a div that contains a grid of images and text.
 * @returns A React Component.
 */
import React from "react";
import Image from "next/image";
import tickets from "../../public/7.png";
import twittr from "../../public/5.png";
import Link from "next/link";
import devflow from "../../public/8.png";
import barbershop from "../../public/9.png";
import travelblog from "../../public/6.png";

export default function Projects() {
  let hover =
    "hover:p-4 hover:shadow-md hover:shadow-slate-400 hover:rounded-xl dark:hover:shadow-cyan-600";
  let tag =
    "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400";
  return (
    <div>
      <div className="grid gap-10 mb-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
        <div id="dashboard" className={hover}>
          <Link href="/zh/projects/dev-overflow/" target="blank">
            <Image src={devflow} alt="" className="rounded-xl" />
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Dev Overflow{" "}
          </h3>
          <p className="text-center dark:text-white">
            Dev Overflow:您的开发者问答、知识首选平台 分享和技术讨论。
          </p>

          <div>
            <h1 className="font-semibold text-lg inline-flex text-cyan-500">
              标签:
            </h1>
            <div className={tag}>Next.js</div>
            <div className={tag}>Typescript</div>
            <div className={tag}>MongoDB</div>
            <div className={tag}>HTML</div>
            <div className={tag}>Tailwind</div>
            <div className={tag}>JavaScript</div>
            <div className={tag}>React</div>
            <div className={tag}>Shadcn/ui</div>
            <div className={tag}>Zod</div>
            <div className={tag}>Clerk</div>
          </div>
        </div>

        <div id="portfolio" className={hover}>
          <Link href="/zh/projects/barber-web" target="blank">
            <Image src={barbershop} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Uptown 理发店{" "}
          </h3>
          <p className="text-center dark:text-white">
            让初学者学习如何中使用HTML和CSS而创建的教程+模板。
          </p>

          <div>
            <h1 className="font-semibold text-lg inline-flex text-cyan-500">
              标签:
            </h1>
            <div className={tag}>HTML</div>
            <div className={tag}>CSS</div>
            <div className={tag}>JavaScript</div>
            <div className={tag}>Next.js</div>
            <div className={tag}>Tailwind</div>
          </div>
        </div>

        <div id="websocket" className={hover}>
          <Link href="/zh/projects/tickets-uk" target="blank">
            <Image src={tickets} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Tickets UK{" "}
          </h3>
          <p className="text-center dark:text-white">
            活动管理平台允许组织者创建和推广活动，并进行与会者注册。
          </p>

          <div>
            <h1 className="font-semibold text-lg inline-flex text-cyan-500">
              标签:
            </h1>
            <div className={tag}>Express.js</div>
            <div className={tag}>Next.js</div>
            <div className={tag}>Typescript</div>
            <div className={tag}>Tailwind</div>
            <div className={tag}>Flowbite</div>
          </div>
        </div>

        <div id="discord.js" className={hover}>
          <Link href="/zh/projects/twittr" target="blank">
            <Image src={twittr} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Twittr App{" "}
          </h3>
          <p className="text-center dark:text-white">
            允许用户创建、阅读、更新、删除推文，还允许用户在推文中表达自己的感受。
          </p>

          <div>
            <h1 className="font-semibold text-lg inline-flex text-cyan-500">
              标签:
            </h1>
            <div className={tag}>React</div>
            <div className={tag}>JSON</div>
            <div className={tag}>Redux</div>
            <div className={tag}>React Router</div>
          </div>
        </div>

        <div id="discord.js" className={hover}>
          <Link href="/zh/projects/travel-blog" target="blank">
            <Image src={travelblog} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            TravelEase Blog{" "}
          </h3>
          <p className="text-center dark:text-white">
            使用 Next.js 和 Contentful CMS 构建的个人博客平台。
          </p>

          <div>
            <h1 className="font-semibold text-lg inline-flex text-cyan-500">
              标签:
            </h1>
            <div className={tag}>Next.js</div>
            <div className={tag}>CMS</div>
            <div className={tag}>Contentful</div>
          </div>
        </div>
      </div>
    </div>
  );
}
