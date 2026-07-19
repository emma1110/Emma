"use client";

import React, { useState } from "react";

export default function FavoriteBooks() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

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

  return (
    <section 
      className="defer-render flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)] px-4 py-16 transition-colors duration-450 sm:px-8 lg:px-[80px] lg:py-[128px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-10 sm:gap-[64px]">
        
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-[12px] max-w-[800px] text-center">
          <h2 
            className="type-display-md w-full text-[color:var(--color-text-inverse,#000000)]"
          >
            My Favorite Books
          </h2>
          <p 
            className="type-body-lg-medium text-[color:var(--color-text-secondary,#525252)]"
          >
            A collection of books that continue to influence my work and decision-making.
          </p>
        </div>

        {/* Books Accordion Container */}
        <div className="no-scrollbar flex w-full snap-x snap-mandatory justify-start overflow-x-auto py-4 lg:justify-center">
          <div className="flex min-w-max items-center gap-4 pr-4 sm:gap-[25px] sm:pr-8 lg:pr-0">
            {books.map((book, idx) => {
              const isExpanded = hoveredIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  className="relative h-[340px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[16px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] sm:h-[390px]"
                  style={{
                    backgroundColor: isExpanded ? "transparent" : book.spineBg,
                    width: isExpanded ? "260px" : "90px"
                  }}
                >
                  {/* Spine Layout (Visible when collapsed) */}
                  <div
                    className={`absolute inset-0 w-[90px] h-full flex flex-col items-center justify-center transition-opacity duration-200 ${
                      isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                    style={{
                      backgroundColor: book.style === "steal" ? "transparent" : book.spineBg
                    }}
                  >
                    {book.style === "steal" ? (
                      /* Special inner container for Steal Like an Artist */
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        style={{ backgroundColor: book.spineInnerBg }}
                      >
                        <div className="absolute flex h-[300px] sm:h-[345px] items-center justify-center w-[24px]">
                          <div className="flex-none rotate-90 origin-center whitespace-nowrap">
                            <span 
                              className="type-body-medium font-bold uppercase"
                              style={{ color: book.spineTextColor }}
                            >
                              {book.spineTitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard spine vertical text */
                      <div className="absolute flex h-[300px] sm:h-[345px] items-center justify-center w-[24px]">
                        <div className="flex-none rotate-90 origin-center whitespace-nowrap">
                          <span 
                            className="type-body-medium font-bold uppercase"
                            style={{ color: book.spineTextColor }}
                          >
                            {book.spineTitle}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cover Image Layout (Visible when expanded) */}
                  <div
                    className={`absolute inset-0 flex h-full w-[260px] items-center justify-center overflow-hidden rounded-[16px] pointer-events-none transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="h-full w-auto max-w-full rounded-[12px] object-contain"
                      width="260"
                      height="390"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
