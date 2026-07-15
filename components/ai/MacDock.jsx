"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function DockIcon({ mouseX, src, label, isActive, onClick }) {
  const ref = useRef(null);

  // Calculate distance between mouseX and the center of the icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale icon size based on mouse proximity (52px to 80px)
  const widthSync = useTransform(distance, [-100, 0, 100], [52, 80, 52]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <div 
      className="flex flex-col items-center justify-end pb-1.5 cursor-pointer select-none"
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        className="relative flex items-center justify-center shrink-0 origin-bottom transition-transform duration-200 active:scale-95 group"
      >
        {/* Tooltip Label */}
        <div className="type-caption absolute top-[-44px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 bg-neutral-900/90 text-white rounded-md pointer-events-none whitespace-nowrap shadow-xl border border-neutral-800">
          {label}
        </div>

        <img 
          src={src} 
          alt={label} 
          className="w-full h-full object-contain rounded-[22%] shadow-md"
        />
      </motion.div>
      
      {/* Active Dot Indicator */}
      <div className="h-2 flex items-center justify-center mt-1.5">
        {isActive ? (
          <motion.div
            layoutId="activeDot"
            className="w-[5px] h-[5px] rounded-full bg-white"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ) : (
          <div className="w-[5px] h-[5px] bg-transparent" />
        )}
      </div>
    </div>
  );
}

export default function MacDock({ activeIndex, setActiveIndex }) {
  const mouseX = useMotionValue(Infinity);

  const tools = [
    { src: "/images/chat gpt.svg", label: "ChatGPT" },
    { src: "/images/claude.svg", label: "Claude" },
    { src: "/images/googleAi.svg", label: "Google AI" },
    { src: "/images/antigravity.svg", label: "Antigravity" },
    { src: "/images/midjourney.svg", label: "Midjourney" }
  ];

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-end gap-3.5 h-[100px] px-6 pb-1 bg-black rounded-[32px] shadow-2xl mx-auto shrink-0 border border-neutral-900"
    >
      {tools.map((tool, idx) => (
        <DockIcon 
          key={idx} 
          mouseX={mouseX} 
          src={tool.src} 
          label={tool.label}
          isActive={activeIndex === idx}
          onClick={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  );
}
