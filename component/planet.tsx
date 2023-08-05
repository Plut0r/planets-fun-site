"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import data from "./data.json";
import { antonio, league_spartan } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Planet() {
  const [image, setImage] = useState({
    alt: "",
    width: 0,
    height: 0,
    color: "",
    border: "",
  });
  const [tab, setTab] = useState(1);
  const params = useParams();
  const planet = data.find(
    (planet) => planet.name.toLowerCase() === params?.planet
  );

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (params?.planet === "venus") {
      setImage((prev) => ({
        ...prev,
        alt: "venus_planet",
        width: 15.8125 * 16,
        height: 15.8125 * 16,
        color: "bg-[#EDA249]",
        border: "border-b-[#EDA249]",
      }));
    } else if (params?.planet === "earth") {
      setImage((prev) => ({
        ...prev,
        alt: "earth_planet",
        width: 17.8125 * 16,
        height: 17.8125 * 16,
        color: "bg-[#6D2ED5]",
        border: "border-b-[#6D2ED5]"
      }));
    } else if (params?.planet === "mars") {
      setImage((prev) => ({
        ...prev,
        alt: "mars_planet",
        width: 13.3125 * 16,
        height: 13.3125 * 16,
        color: "bg-[#D14C32]",
        border: "border-b-[#D14C32]"
      }));
    } else if (params?.planet === "jupiter") {
      setImage((prev) => ({
        ...prev,
        alt: "jupiter_planet",
        width: 23.0625 * 16,
        height: 23.0625 * 16,
        color: "bg-[#D83A34]",
        border: "border-b-[#D83A34]"
      }));
    } else if (params?.planet === "saturn") {
      setImage((prev) => ({
        ...prev,
        alt: "saturn_planet",
        width: 26.375 * 16,
        height: 26.375 * 16,
        color: "bg-[#CD5120]",
        border: "border-b-[#CD5120]"
      }));
    } else if (params?.planet === "uranus") {
      setImage((prev) => ({
        ...prev,
        alt: "uranus_planet",
        width: 18.125 * 16,
        height: 18.125 * 16,
        color: "bg-[#1EC1A2]",
        border: "border-b-[#1EC1A2]"
      }));
    } else if (params?.planet === "neptune") {
      setImage((prev) => ({
        ...prev,
        alt: "neptune_planet",
        width: 17.8125 * 16,
        height: 17.8125 * 16,
        color: "bg-[#2D68F0]",
        border: "border-b-[#2D68F0]"
      }));
    }
  }, [params?.planet]);

  return (
    <div>
      <div className="md:hidden">
        <div className="container flex md:hidden justify-between pt-4">
          <div
            className={`${
              league_spartan.className
            } text-[0.5625rem] font-bold tracking-[0.12056rem] uppercase px-1 cursor-pointer ${
              tab === 1
                ? `text-white border-b-4 ${image.border} pb-3`
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
                ? `text-white border-b-4 ${image.border} pb-3`
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
                ? `text-white border-b-4 ${image.border} pb-3`
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 md:gap-32 lg:gap-60" data-aos="fade-up" data-aos-duration="2000">
          <div className="shrink-0">
            {tab === 1 && (
              <Image
                src={planet?.images?.planet ?? "/assets/planet-mercury.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            )}
            {tab === 2 && (
              <Image
                src={planet?.images?.internal ?? "/assets/planet-mercury-internal.svg"}
                alt={`${image.alt}_internal`}
                width={image.width}
                height={image.height}
              />
            )}
            {tab === 3 && (
              <div className="flex flex-col items-center">
                <Image
                  src={planet?.images?.planet ?? "/assets/planet-mercury.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
                <Image
                  src={planet?.images?.geology ?? "/assets/geology-mercury.png"}
                  alt={`${image.alt}_geology`}
                  width={10.1875 * 16}
                  height={12.4375 * 16}
                  className={`${planet?.name === "saturn" ? "-mt-32" : "-mt-16"}`}
                />
              </div>
            )}
          </div>
          <div className="flex lg:flex-col gap-10 items-center">
            <div className="flex flex-col gap-5 justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h2
                className={`${antonio.className} text-[3rem] lg:text-[5rem] font-normal uppercase`}
              >
                {planet?.name}
              </h2>
              {tab === 1 && (
                <p
                  className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                >
                  {planet?.overview.content}
                </p>
              )}
              {tab === 2 && (
                <p
                  className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                >
                  {planet?.structure.content}
                </p>
              )}
              {tab === 3 && (
                <p
                  className={`${league_spartan.className} text-[0.6875rem] lg:text-[0.875rem] font-normal w-[21.875rem]`}
                >
                  {planet?.geology.content}
                </p>
              )}
              <div
                className={`${league_spartan.className} text-[0.75rem] lg:text-[0.875rem] font-normal opacity-50 flex gap-2 items-center`}
              >
                <span>Source :</span>
                {tab === 1 && (
                  <Link href={`${planet?.overview.source}`} target="blank">
                    <span className="underline">Wikipedia</span>
                  </Link>
                )}
                {tab === 2 && (
                  <Link href={`${planet?.structure.source}`} target="blank">
                    <span className="underline">Wikipedia</span>
                  </Link>
                )}
                {tab === 3 && (
                  <Link href={`${planet?.geology.source}`} target="blank">
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
                    ? `${image.color}`
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
                    ? `${image.color}`
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
                    ? `${image.color}`
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
          <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start pl-5 pr-5 md:pr-0">
            <h3
              className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
            >
              ROTATION TIME
            </h3>
            <h4
              className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
            >
              {planet?.rotation}
            </h4>
          </div>
          <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start pl-5 pr-5 md:pr-0">
            <h3
              className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
            >
              REVOLUTION TIME
            </h3>
            <h4
              className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
            >
              {planet?.revolution}
            </h4>
          </div>
          <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start pl-5 pr-5 md:pr-0">
            <h3
              className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
            >
              RADIUS
            </h3>
            <h4
              className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
            >
              {planet?.radius}
            </h4>
          </div>
          <div className="w-full md:w-[10.25rem] lg:w-[15.9375rem] h-[3rem] md:h-[5.5rem] lg:h-[8rem] border border-[rgba(255,255,255,0.2)] flex md:flex-col gap-1 justify-between md:justify-center items-center md:items-start pl-5 pr-5 md:pr-0">
            <h3
              className={`${league_spartan.className} text-[0.5rem] lg:text-[0.6875rem] font-bold opacity-50 tracking-[0.04544rem] lg:tracking-[0.0625rem] uppercase`}
            >
              AVERAGE TEMP.
            </h3>
            <h4
              className={`${antonio.className} text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-normal tracking-[-0.04688rem] md:tracking-[-0.05625rem] lg:tracking-[-0.09375rem] uppercase`}
            >
              {planet?.temperature}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
