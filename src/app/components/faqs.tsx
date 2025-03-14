import React from "react";
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from "../../components/ui/accordion";
import Title from "./Title";

function index() {
  return (
    <div className="mt-10  ">
      <Title
        text="Who am I ? "
        className="flex flex-col items-center text-white mb-10"
      />
      <AccordionContainer className="md:grid-cols-2 grid-cols-1">
        <AccordionWrapper>
          <Accordion defaultValue={"item-1"}>
            <AccordionItem value="item-1">
              <AccordionHeader className="2xl:text-base text-sm">
                My short Intro
              </AccordionHeader>
              <AccordionPanel className="2xl:text-base text-sm">
                My Name is Kalpit Thakur. A Thrd Year BTech Computer Science and
                engineequing student at Dumka Engineering College, Dumka.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader className="2xl:text-base text-sm">
                What are my Hobbies ?
              </AccordionHeader>
              <AccordionPanel className="2xl:text-base text-sm">
                I am passionate about Full Stack Developing. I love to code and
                learn new technologies. I also love to travel around and explore
                new places.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionHeader className="2xl:text-base text-sm">
                What are my Skills ?
              </AccordionHeader>
              <AccordionPanel className="2xl:text-base text-sm">
                I have skills in React, Next.js, React Native, Tailwind, HTML,
                CSS, JavaScript, TypeScript, Stapi, C, Java, and many more.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionWrapper>
      </AccordionContainer>
    </div>
  );
}

export default index;
