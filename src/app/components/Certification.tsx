"use client";
import React from "react";
import Image from "next/image";
import SoftwareDeveloper from "../../../public/software_engineer_intern certificate (2)_page-0001.jpg";
import ReactDev from "../../../public/frontend_developer_react certificate_page-0001.jpg";
import ReactB from "../../../public/react_basic certificate_page-0001.jpg";
import JavaScript from "../../../public/javascript_intermediate certificate_page-0001.jpg";
import Node from "../../../public/nodejs_basic certificate_page-0001.jpg";

import ScrollElement from "../../components/ui/scroll-element";

type Direction = "left" | "up" | "right";

function Index() {
  const certificates = [
    {
      name: "Software Developer Certificate",
      img: SoftwareDeveloper,
      align: "up" as Direction,
    },
    {
      name: "Frontend Developer React Certificate",
      img: ReactDev,
      align: "up" as Direction,
    },
    {
      name: "React ",
      img: ReactB,
      align: "up" as Direction,
    },
    {
      name: "JavaScript ",
      img: JavaScript,
      align: "down" as Direction,
    },
    {
      name: "Node.js ",
      img: Node,
      align: "down" as Direction,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center py-8">
        <div className="grid grid-cols-3 gap-8 justify-center items-center self-center object-center">
          {certificates.map((certificate, index) => (
            <ScrollElement
              key={index}
              direction={certificate.align}
              viewport={{ amount: 0.5, margin: "0px 0px 0px 0px" }}
            >
              <div className={`flex justify-${certificate.align}`}>
                <Image
                  src={certificate.img}
                  alt={certificate.name}
                  width={450}
                  height={450}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
