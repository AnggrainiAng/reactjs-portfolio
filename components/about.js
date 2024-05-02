import me from "../public/me.jpg";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { BsFillFolderFill } from "react-icons/bs";

export default function About() {
  let tag =
    "text-sm inline-flex items-center font-sans font-semibold leading-sm";

  return (
    <section id="about" className="min-h-screen px-10">
      <div className="flex justify-center items-center mx-auto mt-20">
        <Image src={me} className="mx-auto rounded-full w-80 h-80" alt="" />
      </div>
      <div className="text-center p-8">
        <h2 className="font-sans text-5xl py-2 text-blue-gray-100 dark:text-cyan-500">
          Anggraini
        </h2>
        <h3 className="font-sans text-2xl py-2 text-black dark:text-white">
          Self-taught Full-stack Developer with an Agribusiness Degree
        </h3>
        <p className="font-sans leading-8 text-gray-600 dark:text-gray-300">
          Hello there, My name is Anggi! I am a{" "}
          {new Date().getFullYear() - 1998} years old freelance developer who
          likes to explore and experiment around with different development projects!<br></br>
          Are you a recruiter? Have a look at my projects by clicking on the{" "}
          <span className={tag}>
            <Link href="/en/projects">
              <BsFillFolderFill className="cursor-pointer text-xl dark:fill-white"></BsFillFolderFill>
            </Link>
          </span>{" "}
          button at the top right corner!
        </p>
      </div>
      <div className="text-3xl flex justify-center gap-10">
        <Link href="https://github.com/AnggrainiAng" target="blank">
          <AiFillGithub className="dark:fill-white" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/anggraini-anggraini-5b1771287/"
          target="blank"
        >
          <AiFillLinkedin className="dark:fill-white" />
        </Link>
      </div>
    </section>
  );
}
