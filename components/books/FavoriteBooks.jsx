"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FavoriteBooks() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const books = [
    {
      title: "The Design of Everyday Things",
      spineTitle: "The Design of Everyday Things",
      cover: "/images/Designbook.avif",
      spineBg: "#fbdf36",
      spineTextColor: "#000000",
      style: "light"
    },
    {
      title: "Laws of UX",
      spineTitle: "LAWS OF UX",
      cover: "/images/Laws of UX.avif",
      spineBg: "#ea7d3a",
      spineTextColor: "#000000",
      style: "light"
    },
    {
      title: "Steal Like an Artist",
      spineTitle: "Steal Like an Artist",
      cover: "/images/Steal.avif",
      spineBg: "#fbdf36",
      spineInnerBg: "#231e1f",
      spineTextColor: "#fbdf36",
      style: "steal"
    },
    {
      title: "Atomic Habits",
      spineTitle: "ATOMIC HABITS",
      cover: "/images/Antonomic.avif",
      spineBg: "#e8cf9e",
      spineTextColor: "#000000",
      style: "light"
    },
    {
      title: "Steve Jobs",
      spineTitle: "STEVE JOBS",
      cover: "/images/Steve.avif",
      spineBg: "#262626",
      spineTextColor: "#ffffff",
      style: "dark"
    }
  ];

  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 25
  };

  return (
    <section 
      className="w-full flex flex-col items-center justify-center bg-[var(--bg-color)] transition-colors duration-450 overflow-hidden"
      style={{ 
        paddingBlock: "128px", 
        paddingInline: "var(--spacing-8, 32px)" 
      }}
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[64px] px-4 sm:px-8">
        
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-[12px] max-w-[800px] text-center">
          <h2 
            className="w-full font-bold text-[40px] md:text-[60px] text-[color:var(--color-text-inverse,#000000)] tracking-[-1.2px] leading-[1.2] md:leading-[72px]"
          >
            My Favorite Books
          </h2>
          <p 
            className="font-medium text-[16px] sm:text-[20px] text-[color:var(--color-text-secondary,#525252)]"
            style={{ 
              lineHeight: "var(--font-body-xl-medium-line, 30px)"
            }}
          >
            A collection of books that continue to influence my work and decision-making.
          </p>
        </div>

        {/* Books Accordion Container */}
        <div className="w-full overflow-x-auto no-scrollbar py-4 px-2 select-none flex justify-start lg:justify-center">
          <div className="flex gap-[25px] items-center min-w-max mx-auto lg:mx-0 px-4 lg:px-0">
            {books.map((book, idx) => {
              const isExpanded = hoveredIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ width: isExpanded ? 260 : 90 }}
                  transition={springTransition}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  className="h-[390px] rounded-[16px] overflow-hidden relative shrink-0 cursor-pointer"
                  style={{
                    backgroundColor: book.spineBg,
                    width: isExpanded ? 260 : 90 // Instantly sets width during SSR and first render
                  }}
                >
                  {/* Spine Layout (Visible when collapsed) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isExpanded ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 w-[90px] h-full flex flex-col items-center justify-center"
                    style={{
                      backgroundColor: book.style === "steal" ? "transparent" : book.spineBg,
                      opacity: isExpanded ? 0 : 1 // Instantly sets opacity during SSR
                    }}
                  >
                    {book.style === "steal" ? (
                      /* Special inner container for Steal Like an Artist */
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        style={{ backgroundColor: book.spineInnerBg }}
                      >
                        <div className="absolute flex h-[345px] items-center justify-center w-[24px]">
                          <div className="flex-none rotate-90 origin-center whitespace-nowrap">
                            <span 
                              className="font-semibold text-[20px] leading-[28px] uppercase tracking-wide"
                              style={{ color: book.spineTextColor }}
                            >
                              {book.spineTitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard spine vertical text */
                      <div className="absolute flex h-[345px] items-center justify-center w-[24px]">
                        <div className="flex-none rotate-90 origin-center whitespace-nowrap">
                          <span 
                            className="font-semibold text-[20px] leading-[28px] uppercase tracking-wide"
                            style={{ color: book.spineTextColor }}
                          >
                            {book.spineTitle}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Cover Image Layout (Visible when expanded) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-[260px] h-full pointer-events-none"
                    style={{
                      opacity: isExpanded ? 1 : 0 // Instantly sets opacity during SSR
                    }}
                  >
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
