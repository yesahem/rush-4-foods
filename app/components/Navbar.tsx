"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="https://www.google.com" target="_blank">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Cousines">
          <div className="dark:text-white text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/web-dev">Product-1</HoveredLink>
            <HoveredLink href="/interface-design">Product-2</HoveredLink>
            <HoveredLink href="/seo">Product-3</HoveredLink>
            <HoveredLink href="/branding">Product-4</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Order Now">
        <button className="px-6 mx-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg  transform hover:-translate-y-1 transition duration-400">
         SignUp
        </button>

        <button className="px-6  bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg  transform hover:-translate-y-1 transition duration-400">
          SignIn
        </button>
        </MenuItem>
        
        
      </Menu>
    </div>
  );
}
