import Link from "next/link";
import React from "react";
import { SiInstagram, SiYoutube, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="md:h-40 lg:h-40">
      <div class="  rounded-xl items-center flex justify-center h-40">
        <div className="flex flex-wrap m-15">
          <div class="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              快捷链接
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link
                  href="https://stack-overflow-nextjs13-8xmcie9cd-anggrainiangs-projects.vercel.app/"
                  target="blank"
                >
                  HTML作品集
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              软件开发
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="https://github.com/AnggrainiAng" target="blank">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              法律声明
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="/" target="blank">
                  隐私权声明
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="mailto:anggi3296@gmail.com">隐私疑问</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              联络我
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="mailto:anggi3296@gmail.com">
                  anggi3296@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-center">
          <Link
            className="mx-5 mb-5 dark:text-white"
            href="https://www.instagram.com/itsbayidomba/"
            target="blank"
          >
            <SiInstagram />
          </Link>

          <Link
            className="mx-5 mb-5 dark:text-white"
            href="https://github.com/AnggrainiAng"
            target="blank"
          >
            <SiGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
