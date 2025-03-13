import Image from "next/image";
import React from "react";
import Logo from "../../../public/LOGO.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiHackerrank } from "react-icons/si";

export default function Footer() {
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
    <nav
      className={cn(
        "py-10 flex-col place-items-center border-t mt-10 animate-move-down"
      )}
    >
      <Image src={Logo} alt="M" width={300} height={300} className="mb-8" />
      <div className="flex gap-5">
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
    </nav>
  );
}
