import Marquee from "../../components/ui/marquee";

import Title from "./Title";

import Image from "next/image";
import SoftwareDeveloper from "../../../public/software_engineer_intern certificate (2)_page-0001.jpg";
import ReactDev from "../../../public/frontend_developer_react certificate_page-0001.jpg";
import ReactB from "../../../public/react_basic certificate_page-0001.jpg";
import JavaScript from "../../../public/javascript_intermediate certificate_page-0001.jpg";
import Node from "../../../public/nodejs_basic certificate_page-0001.jpg";

const logos = [
  {
    name: "Software Developer Certificate",
    img: SoftwareDeveloper,
  },
  {
    name: "Frontend Developer React Certificate",
    img: ReactDev,
  },
  {
    name: "React ",
    img: ReactB,
  },
  {
    name: "JavaScript ",
    img: JavaScript,
  },
  {
    name: "Node.js ",
    img: Node,
  },
];

const Marquee3D = () => {
  return (
    <div >
      <Title
              text="Certifications"
              className="flex flex-col items-center  text-white mb-10"
            />

      <div className="relative flex h-full w-[600px] mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-24 md:shadow-xl">
        <div className="flex flex-row gap-4 [perspective:-700px]">
          <Marquee
            className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
            vertical
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
            }}
          >
            {logos.map((data, idx) => (
              <Image
                key={idx}
                src={data.img}
                alt={data.name}
                width={400}
                height={400}
                className="mx-auto h-full w-[300px] cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-600"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Marquee3D;
