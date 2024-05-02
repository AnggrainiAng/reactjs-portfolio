/**
 * It's a function that returns a div that contains a grid of images and text.
 * @returns A React Component.
 */
import React from "react";
import Image from "next/image";
import devflow from "../public/8.png";
import barbershop from "../public/9.png";
import tickets from "../public/7.png";
import twittr from "../public/5.png";
import travelblog from "../public/6.png";
import Link from "next/link";

export default function Projects() {
  let hover =
    "hover:p-4 hover:shadow-md hover:shadow-slate-400 hover:rounded-xl dark:hover:shadow-cyan-600";
  let tag =
    "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400";
  return (
    <div>
      <div className="grid gap-10 mb-32 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
        <div id="dashboard" className={hover}>
          <Link href="/en/projects/dev-overflow/" target="blank">
            <Image src={devflow} alt="" className="rounded-xl" />
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Dev Overflow{" "}
          </h3>
          <p className="text-center dark:text-white">
            Dev Overflow: Your go-to platform for developer Q&A, knowledge
            sharing, and tech discussions.
          </p>

          <div>
            <h1 className="font-semibold text-xl inline-flex text-cyan-500">
              Tags:
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
          <Link href="/en/projects/barber-web" target="blank">
            <Image src={barbershop} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Uptown’s Barbershop{" "}
          </h3>
          <p className="text-center dark:text-white">
            A Company Profile Website created as beginners tutorial
          </p>
          <div>
            <h1 className="font-semibold text-xl inline-flex text-cyan-500">
              Tags:
            </h1>
            <div className={tag}>HTML</div>
            <div className={tag}>CSS</div>
            <div className={tag}>JavaScript</div>
            <div className={tag}>Next.js</div>
            <div className={tag}>Tailwind</div>
          </div>
        </div>

        <div id="websocket" className={hover}>
          <Link href="/en/projects/tickets-uk" target="blank">
            <Image src={tickets} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Tickets UK{" "}
          </h3>
          <p className="text-center dark:text-white">
            Event management platform allowing organizers to create and promote
            events, with attendee registration.
          </p>
          <div>
            <h1 className="font-semibold text-xl inline-flex text-cyan-500">
              Tags:
            </h1>
            <div className={tag}>Express.js</div>
            <div className={tag}>Next.js</div>
            <div className={tag}>Typescript</div>
            <div className={tag}>Tailwind</div>
            <div className={tag}>Flowbite</div>
          </div>
        </div>

        <div id="discord.js" className={hover}>
          <Link href="/en/projects/twittr" target="blank">
            <Image src={twittr} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            Twittr App{" "}
          </h3>
          <p className="text-center dark:text-white">
            It allows users to create, read, update, delete tweets, also allows
            users to express their feelings alongside their tweets.
          </p>
          <div>
            <h1 className="font-semibold text-xl inline-flex text-cyan-500">
              Tags:
            </h1>
            <div className={tag}>React</div>
            <div className={tag}>JSON</div>
            <div className={tag}>Redux</div>
            <div className={tag}>React Router</div>
          </div>
        </div>

        <div id="discord.js" className={hover}>
          <Link href="/en/projects/travel-blog" target="blank">
            <Image src={travelblog} alt="" className="rounded-xl"></Image>
          </Link>
          <h3 className="font-bold text-center text-blue-gray-100 dark:text-cyan-500">
            {" "}
            TravelEase Blog{" "}
          </h3>
          <p className="text-center dark:text-white">
            Personal blog platform built with Next.js and Contentful CMS.
          </p>
          <div>
            <h1 className="font-semibold text-xl inline-flex text-cyan-500">
              Tags:
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
