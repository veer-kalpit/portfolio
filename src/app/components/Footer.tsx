import React from "react";
import { Sparkles } from "../../components/ui/sparkles";
import { MoveDirection } from "@tsparticles/engine";
import Image from "next/image";
import Logo from "../../../public/LOGO.png"
import { SiGithub, SiLinkedin, SiHackerrank } from "react-icons/si";
import Link from "next/link";

function index() {
    const socials = [
       {
         link: "https://www.linkedin.com/in/kalpit-thakur-9158a7242/",
         label: "Linkedin",
         Icon: SiLinkedin,
       },
       {
         link: "https://github.com/veer-kalpit",
         label: "Github",
         Icon: SiGithub,
       },
       {
         link: "https://www.hackerrank.com/profile/veerkalpit",
         label: "Hackerrank",
         Icon: SiHackerrank,
       },
     ];
  return (
    <>
      <div className=" w-screen overflow-hidden bg-black">
        <div className="relative  h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100  after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
          <Sparkles
            density={400}
            size={1.4}
            direction={MoveDirection.top}
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-52  w-screen max-w-2xl relative z-10">
          <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-[140px] lg:w-[200px] h-28 mx-auto grid place-content-center rounded-full">
            <Image src={Logo} alt="M" width={500} height={500} />
          </div>
        </div>
        <article className="text-white  pt-2 w-2/3 mx-auto block text-center z-10 relative place-content-center ">
          <h1 className="text-center text-[40px] text-white font-medium py-3 font-[Tektur]">
            Contact Me
          </h1>
          <div className="flex gap-5 justify-center">
            {socials.map((social, index) => {
              const Icon = social.Icon;

              return (
                <Link
                  href={social.link}
                  key={index}
                  aria-label={social.label}
                  target="_blank"
                >
                  <Icon className="w-6 h-6 hover:scale-125 transition-all text-white" />
                </Link>
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
}

export default index;
