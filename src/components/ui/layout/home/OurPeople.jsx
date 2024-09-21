"use client";
import { OUR_PEOPLES } from "@/constant";
import Image from "next/image";
import React, { useRef } from "react";
import gradient1 from "../../../../../public/assets/gradient-3.png";
import gradient2 from "../../../../../public/assets/gradient-4.png";
import gradient3 from "../../../../../public/assets/gradient-5.png";
import { motion, useInView } from "framer-motion";

const OurPeople = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const zoomVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
    },
  };

  const headingVariants = {
    initial: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="px-4 lg:px-0 lg:max-w-[1100px] mx-auto pt-0 pb-0 lg:py-20 relative" id="ourpeople">
      <motion.h2
        ref={ref}
        variants={headingVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="heading  !text-4xl mb-20"
      >
        Our People
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-60 items-center">
        <motion.div
          ref={ref}
          variants={zoomVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 w-auto md:w-[300px] lg:w-auto"
        >
          {OUR_PEOPLES?.map((people, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <Image
                src={people?.icon}
                alt=""
                width={68}
                height={73}
                className={` w-[68px] h-[73px] ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
                unoptimized={true}
              />
              <div
                className={` ${
                  people?.bgGradient
                } w-[106px] h-[54px] p-1 rounded-md flex flex-col ${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <span className="block text-[9px] text-[#3A6367] font-geometria font-semibold bg-[#F8A0C2] w-3.5 h-3.5 text-center rounded-full">
                  {index + 1}
                </span>
                <span className="font-geometria text-[10px] font-medium inline-block h-3">
                  {people?.text}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={zoomVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="lg:w-2/5"
        >
          <h2 className="heading !text-2xl lg:!text-4xl mb-3 lg:mb-5 !leading-[50px]">
            Words from Principal
          </h2>
          <p className="paragraph !text-[#2E2E2E]">
            {" "}
            Principal engineer is 26 years experience, project manager ,
            detailed designer with national & international experience in:
          </p>
          <ul className="flex flex-col gap-1 pl-8 paragraph !text-[#2E2E2E]">
            <li className="list-disc">
              Design, construction & management experience on projects worth
              $1,000 to $350 m construction value{" "}
            </li>
            <li className="list-disc">
              Managing international and multi-discipline teams with
              multi-language skills
            </li>
            <li className="list-disc">
              Project planning, staff supervision, cost control quality control,
              negotiations, technical evaluations
            </li>
            <li className="list-disc">
              Environmental Studies, Storm Water deign and monitoring, Water &
              Wastewater design and planning skills
            </li>
            <li className="list-disc">
              Effective strategic and relevant planning
            </li>
            <li className="list-disc">Environmental Assessments</li>
          </ul>
        </motion.div>
        <div className="absolute top-20 -left-10 z-[-1]">
          <Image
            src={gradient1}
            alt=""
            className="w-[300px] h-[300px] rotate-[110deg]"
          />
        </div>
        <div className="absolute top-36 -left-16 z-[-1]">
          <Image src={gradient2} alt="" className="w-[400px] h-auto" />
        </div>
        <div className="absolute top-80 left-40 z-[-1]">
          <Image src={gradient3} alt="" className="w-[250px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
