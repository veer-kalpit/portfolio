"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Title from "../components/Title";
import { SiNodedotjs, SiJavascript, SiReact } from "react-icons/si";
import { MdOutlineEngineering } from "react-icons/md";
import SoftwareDeveloper from "../../../public/software_engineer_intern certificate (2)_page-0001.jpg";
import ReactDev from "../../../public/frontend_developer_react certificate_page-0001.jpg";
import ReactB from "../../../public/react_basic certificate_page-0001.jpg";
import JavaScript from "../../../public/javascript_intermediate certificate_page-0001.jpg";
import Node from "../../../public/nodejs_basic certificate_page-0001.jpg";

type Item = {
  id: string;
  imgSrc: StaticImageData;
  title: string;
  icon: React.ComponentType;
};

const items: Item[] = [
  {
    id: "1",
    imgSrc: SoftwareDeveloper,
    title: "Software Developer Certificate",
    icon: MdOutlineEngineering,
  },
  {
    id: "2",
    imgSrc: ReactDev,
    title: "Frontend Developer Certificate",
    icon: SiReact,
  },
  { id: "3", imgSrc: ReactB, title: "React Basic Certificate", icon: SiReact },
  {
    id: "4",
    imgSrc: JavaScript,
    title: "JavaScript Certificate",
    icon: SiJavascript,
  },
  { id: "5", imgSrc: Node, title: "Node.js Certificate", icon: SiNodedotjs },
];

function FramerCarousel() {
  const [activeItem, setActiveItem] = useState<Item>(items[0]);
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Title
        text="Certifications"
        className="flex flex-col items-center text-white mb-10"
      />
      <motion.div
        layoutId="activeItems"
        className="rounded-md w-fit pb-4 gap-2 items-center self-center justify-center mx-auto cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Active Image Display */}
        <AnimatePresence mode="popLayout" initial={false}>
          {activeItem && (
            <motion.figure
              key={activeItem.id}
              className=" border rounded-md p-4 "
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    type: "ease",
                    ease: "easeInOut",
                    duration: 0.3,
                    delay: 0.2,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    type: "ease",
                    ease: "easeInOut",
                    duration: 0.2,
                  },
                }}
              >
                <Image
                  src={activeItem.imgSrc}
                  width={1000}
                  height={1000}
                  alt="Certificate Preview"
                  className="object-contain h-96 mx-auto rounded-md"
                />
              </motion.div>
            </motion.figure>
          )}
        </AnimatePresence>

        {/* Carousel Slider */}
        <motion.div className="w-[550px] mt-4 mx-auto overflow-hidden bg-white border border-white rounded-[40px] p-2">
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex gap-8 self-center justify-center"
          >
            {items.map((itemData) => (
              <motion.div
                key={itemData.id}
                className="relative p-2 flex-shrink-0 cursor-pointer"
                onClick={() => setActiveItem(itemData)}
              >
                <motion.p
                  initial={{ scale: 1, color: "black" }}
                  animate={
                    itemData.id === activeItem.id
                      ? { scale: 1.8, color: "#015BBB" } 
                      : { scale: 1, color: "black" }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-[30px] text-center"
                >
                  {React.createElement(itemData.icon)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FramerCarousel;
