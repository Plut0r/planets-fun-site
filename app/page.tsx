"use client";

import { useEffect } from "react";
import Layout from "@/component/layout";
import Image from "next/image";
import Link from "next/link";
import data from "../component/data.json";
import { antonio, league_spartan } from "@/app/layout";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <main className="">
        <div className="md:hidden">
          <div className="container flex md:hidden justify-between pt-4">
            <div
              className={`${
                league_spartan.className
              } text-[0.5625rem] font-bold tracking-[0.12056rem] uppercase px-1 cursor-pointer ${
                tab === 1
                  ? "text-white border-b-4 border-b-[#419EBB] pb-3"
                  : "text-[rgba(255,255,255,0.5)]"
              }`}
              onClick={() => setTab(1)}
            >
              Overview
            </div>
            <div
              className={`${
                league_spartan.className
              } text-[0.5625rem] font-bold tracking-[0.12056rem] uppercase px-1 cursor-pointer ${
                tab === 2
                  ? "text-white border-b-4 border-b-[#419EBB] pb-3"
                  : "text-[rgba(255,255,255,0.5)]"
              }`}
              onClick={() => setTab(2)}
            >
              Structure
            </div>
            <div
              className={`${
                league_spartan.className
              } text-[0.5625rem] font-bold tracking-[0.12056rem] uppercase px-1 cursor-pointer ${
                tab === 3
                  ? "text-white border-b-4 border-b-[#419EBB] pb-3"
                  : "text-[rgba(255,255,255,0.5)]"
              }`}
              onClick={() => setTab(3)}
            >
              Surface
            </div>
          </div>
          <div className="w-full h-[0.0625rem] bg-[rgba(255,255,255,0.2)]"></div>
        </div>
        <div className="container mt-28 lg:mt-24">
          <div
            className="flex flex-col lg:flex-row justify-center items-center gap-20 md:gap-32 lg:gap-60"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="shrink-0">
              {tab === 1 && (
                <Image
                  src="/assets/planet-mercury.svg"
                  alt="mercury_planet"
                  width={18.125 * 16}
                  height={18.125 * 16}
                  priority
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              )}
              {tab === 2 && (
                <Image
                  src="/assets/planet-mercury-internal.svg"
                  alt="mercury_planet_internal"
                  width={18.125 * 16}
                  height={18.125 * 16}
                  priority
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              )}
              {tab === 3 && (
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/planet-mercury.svg"
                    alt="mercury_planet_geology"
                    width={18.125 * 16}
                    height={18.125 * 16}
                  />
                  <Image
                    src="/assets/geology-mercury.png"
                    alt="mercury_planet_geology"
                    width={10.1875 * 16}
                    height={12.4375 * 16}
                    className="-mt-16"
                    priority
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  />
                </div>
              )}
            </div>
            <div className="flex lg:flex-col gap-10 items-center">
              <div className="flex flex-col gap-5 justify-center md:justify-start items-center md:items-start text-center md:text-left">
                <h2
                  className={`${antonio.className} text-[3rem] lg:text-[5rem] font-normal uppercase`}
                >
                  {data[0].name}
                </h2>
                {tab === 1 && (
                  <p
                    className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                  >
                    {data[0].overview.content}
                  </p>
                )}
                {tab === 2 && (
                  <p
                    className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                  >
                    {data[0].structure.content}
                  </p>
                )}
                {tab === 3 && (
                  <p
                    className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                  >
                    {data[0].geology.content}
                  </p>
                )}
                <div
                  className={`${league_spartan.className} text-[0.75rem] lg:text-[0.875rem] font-normal opacity-50 flex gap-2 items-center`}
                >
                  <span>Source :</span>
                  {tab === 1 && (
                    <Link href={`${data[0].overview.source}`} target="blank">
                      <span className="underline">Wikipedia</span>
                    </Link>
                  )}
                  {tab === 2 && (
                    <Link href={`${data[0].structure.source}`} target="blank">
                      <span className="underline">Wikipedia</span>
                    </Link>
                  )}
                  {tab === 3 && (
                    <Link href={`${data[0].geology.source}`} target="blank">
                      <span className="underline">Wikipedia</span>
                    </Link>
                  )}
                  <Image
                    src="/assets/icon-source.svg"
                    alt="source-icon"
                    width={0.75 * 16}
                    height={0.75 * 16}
                  />
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-4">
                <button
                  className={`w-[17.5625rem] lg:w-[21.875rem] h-[2.5rem] lg:h-[3rem] ${
                    tab === 1
                      ? "bg-active"
                      : "border border-[rgba(255,255,255,0.2)]"
                  } hover:bg-hover flex items-center gap-4 pl-5`}
                  onClick={() => setTab(1)}
                >
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold opacity-50 tracking-[0.169rem] mt-1 uppercase`}
                  >
                    01
                  </span>
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold tracking-[0.169rem] mt-1 uppercase`}
                  >
                    OVERVIEW
                  </span>
                </button>
                <button
                  className={`w-[17.5625rem] lg:w-[21.875rem] h-[2.5rem] lg:h-[3rem] ${
                    tab === 2
                      ? "bg-active"
                      : "border border-[rgba(255,255,255,0.2)]"
                  } hover:bg-hover flex items-center gap-4 pl-5`}
                  onClick={() => setTab(2)}
                >
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold opacity-50 tracking-[0.169rem] mt-1 uppercase`}
                  >
                    02
                  </span>
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold tracking-[0.169rem] mt-1 uppercase`}
                  >
                    INTERNAL STRUCTURE
                  </span>
                </button>
                <button
                  className={`w-[17.5625rem] lg:w-[21.875rem] h-[2.5rem] lg:h-[3rem] ${
                    tab === 3
                      ? "bg-active"
                      : "border border-[rgba(255,255,255,0.2)]"
                  } hover:bg-hover flex items-center gap-4 pl-5`}
                  onClick={() => setTab(3)}
                >
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold opacity-50 tracking-[0.169rem] mt-1 uppercase`}
                  >
                    03
                  </span>
                  <span
                    className={`${league_spartan.className} text-[0.75rem] font-bold tracking-[0.169rem] mt-1 uppercase`}
                  >
                    SURFACE GEOLOGY
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-7 mt-8 md:mt-20 justify-center">
            <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start px-5">
              <h3
                className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
              >
                ROTATION TIME
              </h3>
              <h4
                className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
              >
                {data[0].rotation}
              </h4>
            </div>
            <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start px-5">
              <h3
                className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
              >
                REVOLUTION TIME
              </h3>
              <h4
                className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
              >
                {data[0].revolution}
              </h4>
            </div>
            <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start px-5">
              <h3
                className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
              >
                RADIUS
              </h3>
              <h4
                className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
              >
                {data[0].radius}
              </h4>
            </div>
            <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start px-5">
              <h3
                className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
              >
                AVERAGE TEMP.
              </h3>
              <h4
                className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
              >
                {data[0].temperature}
              </h4>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
