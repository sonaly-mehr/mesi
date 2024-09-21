"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import chart from "../../../../../public/assets/chart.png";
import { motion, useInView } from "framer-motion";

const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const headingVariants = {
    initial: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (videoRef.current) {
  //       const rect = videoRef.current.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         if (!isPlaying) {
  //           videoRef.current.play().catch(error => console.error("Play error:", error));
  //           setIsPlaying(true);
  //         }
  //       } else {
  //         if (isPlaying) {
  //           videoRef.current.pause().catch(error => console.error("Pause error:", error));
  //           setIsPlaying(false);
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isPlaying]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current
          .pause()
          .catch((error) => console.error("Pause error:", error));
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .catch((error) => console.error("Play error:", error));
        setIsPlaying(true);
      }
    } else {
      console.error("Video reference is null or undefined");
    }
  };

  return (
    <div className="container mt-[-60px] lg:mt-0 pt-0 pb-10 lg:py-20 px-0 lg:px-20 xl:px-0 2xl:px-20 overflow-x-hidden">
      <motion.h2
        ref={ref}
        variants={headingVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="heading !text-3xl lg:!text-5xl text-center mb-4 lg:mb-0"
      >
        Sustainability
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-between items-center">
        <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[350px] xl:w-[480px] xl:h-[480px] 2xl:w-[600px] 2xl:h-[600px] rounded-full overflow-hidden">
          <video
            className=" absolute inset-0 w-full h-full object-cover object-right"
            src="/assets/sustainibilty.mp4"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="">
          <div className="relative">
            <img
              src="/assets/chart2.png"
              alt=""
              className=" w-auto h-auto block xl:hidden"
            />
            <Image
              src={chart}
              alt=""
              className="hidden xl:block md:w-[400px]  lg:w-[580px] h-auto"
            />
            <div className="hidden xl:block absolute lg:left-[30px] xl:left-[36px] 2xl:left-[36px] md:bottom-[35px] lg:bottom-[40px] xl:bottom-[48px] 2xl:bottom-[48px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                01
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5">
                Sustainable <br /> Designs by <br /> Default
              </p>
            </div>

            <div className="hidden xl:block absolute lg:left-[15px] 2xl:left-[18px] xl:left-[18px] bottom-[170px] xl:bottom-[190px] 2xl:bottom-[190px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                02
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5">
                Maximize the <br /> Use of Existing <br /> Infrastructure
              </p>
            </div>
            <div className="hidden xl:block absolute lg:left-[15px] xl:left-[105px] bottom-[260px] xl:bottom-[270px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                03
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5 !leading-[15px]">
                Less <br /> Mobilization <br /> More <br /> Connectivity by{" "}
                <br /> Conference <br />
                Calls
              </p>
            </div>
            <div className="hidden xl:block absolute lg:left-[15px] xl:left-[245px] bottom-[260px] xl:bottom-[330px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                04
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5 !leading-[15px]">
                Office <br /> Sustainable <br /> Policies
              </p>
            </div>

            <div className="hidden xl:block absolute lg:left-[15px] xl:left-[374px] 2xl:left-[370px] bottom-[260px] xl:bottom-[296px] 2xl:bottom-[290px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                05
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5 !leading-[15px]">
                EMPLOYEMENT <br /> FOR LOCAL <br /> LABOUR POOL
              </p>
            </div>
            <div className="hidden xl:block absolute lg:left-[15px] xl:left-[440px] 2xl:left-[440px] bottom-[260px] xl:bottom-[174px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                06
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5 !leading-[15px]">
                EMPLOYMENT FOR <br /> FIRST NATION AND <br /> MINORITY WORK{" "}
                <br /> FORCE
              </p>
            </div>
            <div className="hidden xl:block absolute lg:left-[15px] xl:left-[440px] 2xl:left-[440px] bottom-[46px] xl:bottom-[46px] text-center">
              <span className="font-semibold font-geometria text-sm lg:text-base 2xl:text-lg text-gray">
                07
              </span>
              <p className="text-xs xl:text-sm uppercase text-gray mt-0.5 !leading-[15px]">
                GREEN APPROACH <br /> TO TRAVELING OUR <br /> UNLEADED VS <br />{" "}
                LEADED FUEL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
