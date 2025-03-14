"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Context for managing accordion state
interface AccordionContextType {
  isActive: boolean;
  value: string;
  onChangeIndex: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
};

// Props types
interface AccordionContainerProps {
  children: ReactNode;
  className?: string;
}

interface AccordionWrapperProps {
  children: ReactNode;
  className?: string;
}

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  defaultValue?: string | string[];
  className?: string;
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface AccordionHeaderProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

interface AccordionPanelProps {
  children: ReactNode;
  className?: string;
}

// Accordion Container Component
export function AccordionContainer({
  children,
  className,
}: AccordionContainerProps) {
  return (
    <div className={cn(" px-20 gap-1 font-[Tektur] tracking-[1px]", className)}>
      {children}
    </div>
  );
}

// Wrapper for the Accordion
export function AccordionWrapper({
  children,
  className,
}: AccordionWrapperProps) {
  return <div className={cn(className)}>{children}</div>;
}

// Accordion Component
export function Accordion({
  children,
  multiple,
  defaultValue,
  className,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<string[]>(
    multiple
      ? defaultValue
        ? ([] as string[]).concat(defaultValue)
        : []
      : [defaultValue as string]
  );

  function onChangeIndex(value: string) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex[0] ? [] : [value];
      }

      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value);
      }

      return [...currentActiveIndex, value];
    });
  }

  return (
    <div className={cn(className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const value = (child as React.ReactElement<{ value: string }>).props
          .value;
        const isActive = multiple
          ? activeIndex.includes(value)
          : activeIndex[0] === value;

        return (
          <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
            {child}
          </AccordionContext.Provider>
        );
      })}
    </div>
  );
}

// Accordion Item Component
export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {


  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden mb-2 border-2 active border-[#656fe2]",

        className
      )}
      data-value={value} // Helps avoid issues with React's `value` prop
    >
      {children}
    </div>
  );
}

// Accordion Header Component
export function AccordionHeader({
  children,
  icon,
  className,
}: AccordionHeaderProps) {
  const { isActive, value, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={cn(
        "p-4 cursor-pointer transition-all font-semibold flex justify-between items-center",
        "text-white bg-[#1e2a78]  dark:hover:text-white",
        className
      )}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div
          className={cn(
            isActive ? "rotate-45" : "rotate-0",
            "transition-transform"
          )}
        >
          {icon}
        </div>
      ) : (
        <ChevronDown
          className={cn(
            isActive ? "rotate-180" : "rotate-0",
            "transition-transform"
          )}
        />
      )}
    </motion.div>
  );
}

// Accordion Panel Component
export function AccordionPanel({ children, className }: AccordionPanelProps) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "hidden" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className={cn(className)}
        >
          <motion.article
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="p-3 bg-transparent text-white"
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
