"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { AnimatedBeamDemo } from "./ui/shadcn/BiDirBeam";
import { NavbarDemo } from "./Navbar";


export function BackgroundBeamsDemo() {

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-red-600  text-center font-sans font-bold">
          Rush-4-foods
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center bg-clip-text relative z-90 bg-gradient-to-b from-green-500 to-red-600 ">
        Shipping food to your doorstep in less than 30 minutes. <br />
          For people who love food but hate waiting.
        </p>

      </div>
      <AnimatedBeamDemo />
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center bg-clip-text relative z-90 bg-gradient-to-b from-green-500 to-red-600 ">
        Get Your food at you doorstep at speed of lightning fast  <br />
        </p>
        <BackgroundBeams />
        <NavbarDemo />

    </div>
  );
}
