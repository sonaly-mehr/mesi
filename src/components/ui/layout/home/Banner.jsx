"use client";
import Image from "next/image";
import React from "react";
import banner from "../../../../../public/assets/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  const zoomVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
    },
  };
  return (
    <motion.div
      className="w-full lg:w-[90%] mx-auto h-auto mt-5"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3.5, ease: "easeInOut" }}
    >
      <Image src={banner} alt="" className="w-full object-cover h-auto" />
      <h4 className="text-gray/60 font-medium font-geometria text-lg lg:text-2xl mt-3 lg:mt-5 leading-8 uppercase w-full text-center">
        personalized solutions that are dependable & cost-efficient
      </h4>
    </motion.div>
  );
};

export default Banner;
