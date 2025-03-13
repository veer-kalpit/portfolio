import { cn } from "@/lib/utils";
import {
  motion,
  HTMLMotionProps,
  SVGMotionProps,
  Variant,
} from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right";

// Generates default animation variants based on the direction
const generateVariants = (
  direction: Direction
): { hidden: Variant; visible: Variant } => {
  const isHorizontal = direction === "left" || direction === "right";
  const value = direction === "right" || direction === "down" ? 100 : -100;

  return {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      [isHorizontal ? "x" : "y"]: value,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      [isHorizontal ? "x" : "y"]: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
};

const defaultViewport = { amount: 0.3, margin: "0px 0px -200px 0px" };

type MotionComponentProps = HTMLMotionProps<"div"> & SVGMotionProps<"svg">;

interface ScrollElementProps extends Omit<MotionComponentProps, "children"> {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden?: Variant;
    visible?: Variant;
  };
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
}

const ScrollElement: React.FC<ScrollElementProps> = ({
  children,
  className,
  variants,
  viewport = defaultViewport,
  delay = 0,
  direction = "down",
  ...rest
}) => {
  const baseVariants = variants ?? generateVariants(direction);

  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...baseVariants.visible.transition,
        delay: baseVariants.visible.transition?.delay ?? delay, // Ensure delay is applied
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={modifiedVariants}
      viewport={viewport}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollElement;
