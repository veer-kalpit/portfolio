import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const items = useMemo(() => {
    return Array(Math.max(1, repeat))
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className={cn(
            "marquee-content flex shrink-0 justify-around [gap:var(--gap)]",
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row",
            reverse && "reverse",
            pauseOnHover && "pause-on-hover" 
          )}
        >
          {children}
        </div>
      ));
  }, [repeat, pauseOnHover, reverse, vertical, children]);

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {children ? items : <p className="text-center">No content available</p>}
    </div>
  );
}
