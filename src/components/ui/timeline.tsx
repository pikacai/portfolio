"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Reveal from "../fx/Reveal";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-32">
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:top-32 md:w-full md:flex-row lg:max-w-sm">
              {/* node */}
              <div className="absolute left-1 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft md:left-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-brand-blue/10" />
              </div>
              <h3 className="hidden text-xl font-bold text-ink/80 transition-colors hover:text-transparent md:block md:bg-brand-gradient md:bg-clip-text md:pl-20 md:text-5xl md:hover:text-transparent">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block bg-brand-gradient bg-clip-text text-left text-3xl font-bold text-transparent md:hidden">
                {item.title}
              </h3>
              <Reveal>{item.content}</Reveal>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-6 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-brand-orange via-brand-violet to-brand-blue"
          />
        </div>
      </div>
    </div>
  );
};
