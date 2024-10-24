"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../../../components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3 )]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg   p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.user />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.openai />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
}

const Icons = {
  openai: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="food" viewBox="0 0 24 24">
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          fill="none"
          stroke="#faa41a"
          d="M13.086 8.261a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M12.978 10.749a1.25 1.25 0 0 1-1.25-1.239 1.25 1.25 0 0 1 1.227-1.261M13.086 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.227-1.261m4.977-2.488a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M17.978 10.749a1.25 1.25 0 0 1-1.25-1.239 1.25 1.25 0 0 1 1.227-1.261M18.086 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.227-1.261M8.473 8.26a1.25 1.25 0 0 0 1.25-1.238A1.25 1.25 0 0 0 8.497 5.76M8.366 10.749a1.25 1.25 0 0 1-1.25-1.239A1.25 1.25 0 0 1 8.342 8.25M8.473 13.249a1.25 1.25 0 0 0 1.25-1.239 1.25 1.25 0 0 0-1.226-1.261"
        ></path>
        <path
          fill="#faa41a"
          stroke="#383747"
          d="M29.907 9.92c0 1.279-.887 2.315-1.98 2.315-1.095 0-1.982-1.036-1.982-2.314s.887-3.296 1.981-3.296 1.981 2.018 1.981 3.296z"
        ></path>
        <path
          fill="none"
          stroke="#383747"
          d="M8.96 26.239h8.999v-2.976c-1.918.846-3.035.978-4.588 1.01-1.944.04-3.26-.296-4.41-.583zm18.95-13.452c-.94 2.905-.675 6.614-.978 9.944 0 1.532 1.989 1.48 1.989 0-.306-3.307.172-6.562-1.01-9.944z"
        ></path>
        <path
          fill="#faa41a"
          stroke="#383747"
          d="M24.813 15.465c-1.681 6.274-8.13 9.997-14.404 8.316a11.76 11.76 0 0 1-8.316-8.316z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          d="M21.447 17.498c-.708 2.159-2.603 3.66-4.803 4.068"
        ></path>
      </g>
    </svg>
  ),
  user: () => (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
  ),
};
