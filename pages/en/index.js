//Main File located at http://localhost:3000/en/

import Head from "next/head";
import Nav from "../../components/nav";
import About from "../../components/about";
import { BsCodeSlash } from "react-icons/bs";
import { FaBootstrap, FaDocker, FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReplit,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiChakraui,
  SiMysql,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import Footer from "../../components/footer";
import Projects from "../../components/projects";
import Link from "next/link";

export default function Home() {
  let cards =
    "text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200";
  let tag =
    "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400";

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
        <section className="min-h-screen px-10">
          <Nav icons="Project" />
          <About />
        </section>

        <section className="h-auto px-10">
          <div className="text-center">
            <h2
              id="skills"
              className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500"
            >
              Technologies
            </h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">
              {`  I've worked with a range a technologies in the web development
              world. From `}
              <span className="text-blue-gray-100 dark:text-cyan-500">
                Back-end
              </span>{" "}
              to{" "}
              <span className="text-blue-gray-100 dark:text-cyan-500">
                Design.
              </span>
            </p>
          </div>

          <div className="grid gap-10 mb-10 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
            
            <div className={cards}>
              <SiTailwindcss className="mx-auto text-5xl text-blue-600" />
              <h2 className="font-bold text-blue-400 dark:text-green-600 mb-4">
                Front-end
              </h2>

              <div className={tag}>
                <AiFillGithub className="mr-1" /> Github
              </div>
              <div className={tag}>
                <SiGit className="mr-1" /> Git
              </div>
              <div className={tag}>
                <SiVisualstudiocode className="mr-1" /> Visual Studio Code
              </div>
              <div className={tag}>
                <SiReact className="mr-1" /> React.js
              </div>
              <div className={tag}>
                <SiNextdotjs className="mr-1" /> Next.js
              </div>
              <div className={tag}>
                <SiTailwindcss className="mr-1" /> Tailwind CSS
              </div>
              <div className={tag}>
                <SiJavascript className="mr-1" /> JavaScript
              </div>
              <div className={tag}>
                <AiFillHtml5 className="mr-1" /> HTML
              </div>
              <div className={tag}>
                <IoLogoCss3 className="mr-1" /> CSS
              </div>
              <div className={tag}>
                <SiTypescript className="mr-1" /> TypeScript
              </div>
              <div className={tag}>
                <SiRedux className="mr-1" /> Redux
              </div>
              <div className={tag}>
                <SiChakraui className="mr-1" /> ChakraUi
              </div>
              <div className={tag}>
                <FaBootstrap className="mr-1" /> Bootsrap
              </div>
              <div className={tag}>
                <TbApi className="mr-1" /> REST API
              </div>
            </div>

            <div className={cards}>
              <IoLogoNodejs className="mx-auto text-5xl text-green-500" />
              <h2 className="font-bold text-blue-400 dark:text-blue-700 mb-4">
                Back-end
              </h2>
              <div className={tag}>
                <AiFillGithub className="mr-1" /> Github
              </div>
              <div className={tag}>
                <SiGit className="mr-1" /> Git
              </div>
              <div className={tag}>
                <SiVisualstudiocode className="mr-0.5" /> Visual Studio Code
              </div>
              <div className={tag}>
                <SiJavascript className="mr-1" /> JavaScript
              </div>
              <div className={tag}>
                <SiTypescript className="mr-1" /> TypeScript
              </div>
              <div className={tag}>
                <FaNodeJs className="mr-1" /> Node.js
              </div>
              <div className={tag}>
                <SiMongodb className="mr-1" /> MongoDB
              </div>
              <div className={tag}>
                <SiExpress className="mr-1" /> Express.js
              </div>
              <div className={tag}>
                <SiMysql className="mr-1" /> MySQl
              </div>
              <div className={tag}>
                <SiPrisma className="mr-1" /> Prisma
              </div>
              <div className={tag}>
                <SiPostman className="mr-1" /> Postman
              </div>
              <div className={tag}>
                <FaDocker className="mr-1" /> Docker
              </div>
              <div className={tag}>
                <SiJavascript className="mr-1" /> node-fetch
              </div>
              <div className={tag}>
                <SiJavascript className="mr-1" /> axios
              </div>
            </div>

            <div className={cards}>
              <MdOutlineWeb className="mx-auto text-5xl text-yellow-500" />
              <h2 className="font-bold text-blue-400 dark:text-yellow-600 mb-4">
                UI/UX
              </h2>
              <p>Experience with tools like Figma and Canva</p>
            </div>

          </div>
        </section>

        <section className="mx-20 project-grid">
          <div className="text-center">
            <h2
              id="projects"
              className="font-sans font-semibold text-3xl py-2 text-blue-gray-100 dark:text-cyan-500"
            >
              Projects
            </h2>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">
              This section features some of the amazing projects that I have
              done in the past!
            </p>
            <p className="font-sans text-md leading-8 text-gray-600 dark:text-gray-300">
              You can view all of my{" "}
              <Link href="/en/projects">
                <span className="text-blue-gray-100 dark:text-cyan-500">
                  projects here
                </span>
              </Link>{" "}
              in the projects directory!
            </p>
          </div>
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
}
