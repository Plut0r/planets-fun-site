"use client";

import React, { useState, useEffect } from "react";
import { antonio, league_spartan } from "@/app/layout";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  {
    id: 1,
    name: "MERCURY",
    path: "/",
    bg: "bg-[#DEF4FC]",
    border: "#419EBB",
  },
  {
    id: 2,
    name: "VENUS",
    path: "/venus",
    bg: "bg-[#F7CC7F]",
    border: "#EDA249",
  },
  {
    id: 3,
    name: "EARTH",
    path: "/earth",
    bg: "bg-[#545BFE]",
    border: "#6D2ED5",
  },
  {
    id: 4,
    name: "MARS ",
    path: "/mars",
    bg: "bg-[#FF6A45]",
    border: "#D14C32",
  },
  {
    id: 5,
    name: "JUPITER",
    path: "/jupiter",
    bg: "bg-[#ECAD7A]",
    border: "#D83A34",
  },
  {
    id: 6,
    name: "SATURN",
    path: "/saturn",
    bg: "bg-[#FCCB6B]",
    border: "#CD5120",
  },
  {
    id: 7,
    name: "URANUS",
    path: "/uranus",
    bg: "bg-[#65F0D5]",
    border: "#1EC1A2",
  },
  {
    id: 8,
    name: "NEPTUNE",
    path: "/neptune",
    bg: "bg-[#497EFA]",
    border: "#2D68F0",
  },
];

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="">
      <div className="container w-full my-4 md:my-7 flex md:flex-col lg:flex-row justify-between items-center md:gap-10">
        <h1
          className={`${antonio.className} text-[1.75rem] font-normal tracking-[-0.06563rem] uppercase`}
        >
          THE PLANETS
        </h1>
        <div className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.9rem] font-bold leading-[1.5625rem] tracking-[0.0625rem] uppercase opacity-[0.75] hover:opacity-100`}
              rel="preload"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile hamburger */}
        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => setMobileNav(true)}
        >
          <Image
            src="/assets/icon-hamburger.svg"
            alt="hamburger_icon"
            width={1.5 * 16}
            height={1.0625 * 16}
          />
        </div>
      </div>
      <div className="w-full h-[0.0625rem] bg-white opacity-20"></div>

      {/* Mobile Navigation Menu */}

      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ right: "-100%" }}
            animate={{ right: 0 }}
            exit={{ right: "-100%" }}
            transition={{ duration: 0.5 }}
            className={`md:hidden fixed w-full h-screen top-0 ${
              mobileNav ? "right-0" : "-right-full"
            } bg-[#070724] z-40`}
          >
            <motion.div className="container my-4 flex justify-between items-center">
              <p
                className={`${antonio.className} text-[1.75rem] font-normal tracking-[-0.06563rem] uppercase`}
              >
                THE PLANETS
              </p>
              <div
                className="cursor-pointer"
                onClick={() => setMobileNav(false)}
              >
                <Image
                  src="/assets/icon-hamburger.svg"
                  alt="icon_hamburger"
                  width={1.5 * 16}
                  height={1.0625 * 16}
                />
              </div>
            </motion.div>
            <motion.div className="w-full h-[0.0625rem] bg-white opacity-20"></motion.div>
            <motion.div className="mt-10 container flex flex-col gap-5">
              {nav.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-b-[rgb(255,255,255,0.2)] pb-5"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`${item.bg} w-[1.25rem] h-[1.25rem] rounded-full`}
                    ></div>
                    <h2
                      className={`${league_spartan.className} text-[0.9375rem] font-bold uppercase tracking-[0.08525rem]`}
                    >
                      {item.name}
                    </h2>
                  </div>
                  <Link href={item.path} rel="preload">
                    <div>
                      <Image
                        src="/assets/icon-chevron.svg"
                        alt="icon_chevron"
                        width={0.25 * 16}
                        height={0.5 * 16}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
