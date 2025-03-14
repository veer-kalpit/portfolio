import Marquee from "../../components/ui/marquee";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import SoftwareDeveloper from "../../../public/software_engineer_intern certificate (2)_page-0001.jpg";
import ReactDev from "../../../public/frontend_developer_react certificate_page-0001.jpg";
import ReactB from "../../../public/react_basic certificate_page-0001.jpg";
import JavaScript from "../../../public/javascript_intermediate certificate_page-0001.jpg";
import Node from "../../../public/nodejs_basic certificate_page-0001.jpg";

const logos = [
  { name: "Software Developer Certificate", img: SoftwareDeveloper },
  { name: "Frontend Developer React Certificate", img: ReactDev },
  { name: "React ", img: ReactB },
  { name: "JavaScript ", img: JavaScript },
  { name: "Node.js ", img: Node },
];

const Marquee3D = () => {
  return (
    <div>
      <Title
        text="Certifications"
        className="flex flex-col items-center text-white mb-10"
      />

      <div className="relative flex h-full lg:w-[900px] w-[450px] mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-24 md:shadow-xl">
        <Link href="/Certificate">
          <div className="flex flex-row gap-4 perspective-700">
            <Marquee
              className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
              vertical
              pauseOnHover={true}
              style={{
                transform:
                  "translateZ(-50px) rotateY(-10deg) rotateZ(15deg) scale(1.5)",
              }}
            >
              {logos.map((data, idx) => (
                <Image
                  key={idx}
                  src={data.img}
                  alt={data.name}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="mx-auto h-full w-[280px] cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-2 hover:ring-[#015BBB]"
                />
              ))}
            </Marquee>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Marquee3D;
