import me from "../../public/me.jpg";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen px-10">
      <div className="flex justify-center items-center mx-auto mt-20">
        <Image src={me} className="mx-auto rounded-full w-80 h-80" alt="" />
      </div>
      <div className="text-center p-10">
        <h2 className="font-sans text-5xl py-2 text-blue-gray-100 dark:text-cyan-500">
          Anggraini
        </h2>
        <h3 className="font-sans text-2xl py-2 text-black dark:text-white">
          全栈开发人员
        </h3>
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
