"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const zoomVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1], // Scale up and then scale back down
  },
};

const Navbar = () => {
  return (
    <div className="container mx-auto py-2">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-end">
        <div className="flex gap-2 items-center justify-center lg:justify-normal w-full lg:w-auto">
          <motion.div
            variants={zoomVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={147}
              height={150}
              className="w-[100px] lg:w-[120px] xl:w-[147px] h-auto"
            />
          </motion.div>
          <span
            style={{
              textShadow: "rgba(0, 0, 0, 0.166) 0px 7.75px 11.234px",
              filter: "opacity(0.9)",
            }}
            className="text-[48px] lg:text-[60px] xl:text-[100px] mt-0 text-black/85 uppercase font-bowler tracking-[10px]"
          >
            MESI
          </span>
        </div>
        <div className="w-full lg:w-auto">
          <motion.p
            className="text-[#515463] font-normal text-base lg:text-lg xl:text-[20px] font-geometria text-center mt-5 lg:mt-0"
            variants={zoomVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            Water, Wastewater, Erosion Control, Environmental Engineering &
            Monitoring Firm
          </motion.p>
          <motion.ul
            variants={zoomVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="nav_links gap-5 lg:gap-8 paragraph flex flex-wrap justify-center lg:justify-end mt-4"
          >
            <li>
              <Link href="#whoweare" className="text-gray hover:text-black">
                WHO WE ARE
              </Link>
            </li>
            <li>
              <Link href="#whatwedo" className="text-gray hover:text-black">
                WHAT WE DO
              </Link>
            </li>

            <li>
              {" "}
              <Link href="#ourpeople" className="text-gray hover:text-black">
                OUR PEOPLE
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#contact" className="text-gray hover:text-black">
                CONTACT
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
