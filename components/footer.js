import React from "react";
import Link from "next/link";
import { SiInstagram, SiYoutube, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="md:h-40 lg:h-40">
      <div className="rounded-xl items-center flex justify-center h-40">
        <div className="flex flex-wrap m-15">
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Quick Links
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="/en/projects">Project Directory</Link>
              </li>
              <li className="dark:text-white">
                <Link
                  href="https://stack-overflow-nextjs13-8xmcie9cd-anggrainiangs-projects.vercel.app/"
                  target="blank"
                >
                  Portfolio Website
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Development
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="https://github.com/AnggrainiAng" target="blank">
                  GitHub
                </Link>
              </li>
              <li className="dark:text-white"></li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Legal
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="/" target="blank">
                  Privacy Policy
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="/" target="blank">
                  Terms and Conditions
                </Link>
              </li>
              <li className="dark:text-white">
                <Link href="mailto:anggi3296@gmail.com">Privacy Concerns</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col relative m-5">
            <h4 className="font-sans font-bold text-xl dark:text-cyan-500">
              Contact
            </h4>
            <ul className="list-none text-sm">
              <li className="dark:text-white">
                <Link href="mailto:anggi3296@gmail.com">
                  anggi3296@gmail.com
                </Link>
              </li>

              <li className="dark:text-white">
                <Link href="/">Discord DMs</Link>
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
