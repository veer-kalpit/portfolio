"use client";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import AnimatedLetters from "../../components/ui/AnimatedLetters";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold cursor-default">
          <AnimatedLetters text="Hi There! 👋" />
          <br />
          <AnimatedLetters text="I'm Kalpit Thakur" delay={0.5} />
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-300">
          {
            "I'm a passionate Full-Stack Developer with expertise in React, Next.js, and React Native. Currently in the third year of a B.Tech in Computer Science and Engineering (CSE), dedicated to building scalable, intelligent, and user-friendly applications."
          }
        </p>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=veerkalpit@gmail.com"
          target="_blank"
          className="inline-block group"
        >
          <Title text="Contact Me 📭" className="text-white" />
        </Link>
      </div>
      <div>
        <Link
          href="https://drive.google.com/file/d/1RJMPBYqUvMQI5rnb3t9oWcftbvsLTtWl/view?usp=drive_link"
          target="_blank"
        >
          <button
            type="button"
            className="group relative flex h-14 w-[200px] items-center justify-center gap-4 border-2 dark:border-[#656fe2] border-[#394481] rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black"
          >
            <span className="pl-4">Download CV</span>
            <div className="relative h-9 w-9 overflow-hidden dark:bg-white bg-black rounded-full mr-1">
              <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:fill-black fill-white"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
