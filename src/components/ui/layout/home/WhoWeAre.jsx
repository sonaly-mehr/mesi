"use client";
import Image from "next/image";
import React, { useRef } from "react";
import liner from "../../../../../public/assets/liner.png";
import { motion, useInView } from "framer-motion";

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const zoomVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
    },
  };

  const zoomVariants2 = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
    },
  };

  return (
    <div className="container py-10 lg:py-20" id="whoweare">
      <motion.div
        ref={ref}
        variants={zoomVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        exit="exit"
        transition={{ duration: 3.5, ease: "easeInOut" }}
      >
        <h4 className="text-center mb-2 heading">WHO WE ARE</h4>
        <p className="paragraph lg:w-[90%] mx-auto">
          Mangat Environmental Solutions Inc. (MESI) is a British Columbia
          registered firm and has been in operation since 2012. MESI has been
          providing wide variety of engineering services to various levels of
          government and private organizations in Canada and internationally.{" "}
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        variants={zoomVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        exit="exit"
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="block lg:hidden"
      >
        <img src="/assets/graph.png" alt="" className=" w-ful h-auto block" />
      </motion.div>
      <motion.div
        ref={ref}
        variants={zoomVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        exit="exit"
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="hidden lg:block max-w-[1000px] mx-auto my-4 relative"
      >
        <Image
          src={liner}
          alt=""
          className="w-full mx-auto h-auto"
          unoptimized={true}
        />
        <div class="w-auto  mx-auto absolute left-0 -bottom-[15px]">
          <div className="text-center leading-4">
            <span className="words words1 font-geometria font-medium">
              2012- <br />
              FOUNDING <br /> YEAR
            </span>
          </div>
        </div>

        <div class="w-auto  mx-auto absolute left-[450px] -bottom-[35px]">
          <div className="text-center leading-4">
            <span className="words words2 font-geometria font-medium">
              2017- STORM <br />
              WATER <br /> MANAGEMENT <br />
              SERVICES
            </span>
          </div>
        </div>

        <div class="w-auto  mx-auto absolute left-[660px] -bottom-[15px]">
          <div className="text-center leading-4">
            <span className="words words3 font-geometria font-medium">
              2023- IoT <br />
              INFRASTRUCTURE <br /> MONITORING SERVICES
            </span>
          </div>
        </div>
        <div class="w-auto  mx-auto absolute left-[900px] -bottom-[30px]">
          <div className="text-center leading-4">
            <span className="words words3 font-geometria font-medium">
              2022- STREAM-SIDE <br />
              ENVIRONMENTAL <br /> ASSESSMENT
            </span>
          </div>
        </div>
      </motion.div>

      {/* our-philosophy */}
      <div className="mt-10 lg:mt-20 max-w-[1100px] mx-auto">
        <motion.h4
          ref={ref}
          variants={zoomVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="heading !font-bowler text-center"
        >
          Our philosophy
        </motion.h4>
        <motion.p
          ref={ref}
          variants={zoomVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="paragraph text-center mb-8"
        >
          We foster a culture of cooperation and partnership with our clients in
          which we seek a quality & value added solution{" "}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-between gap-5 lg:gap-10">
          <motion.div
            ref={ref}
            variants={zoomVariants2}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            exit="exit"
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <h4 className="heading !font-bowler mb-1 text-center lg:text-left">
              Our vision
            </h4>
            <p className="paragraph">
              Mangat Environmental Solutions Inc. (MESI) vision is to maintain
              and strengthen its core engineering business for municipal,
              industrial and land development companies and to respond to the
              different needs of clients and markets. Our vision is defined
              through our core values:
            </p>
            <ul className="paragraph flex flex-col gap-1 pl-8">
              <li className="list-disc">A culture of ownership</li>
              <li className="list-disc">
                Entrepreneurial freedom with responsibility
              </li>
              <li className="list-disc">Ethics and integrity</li>
              <li className="list-disc">
                Technical and professional excellence
              </li>
              <li className="list-disc">Customer success</li>
            </ul>
          </motion.div>

          <motion.div
            ref={ref}
            variants={zoomVariants2}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            exit="exit"
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <h4 className="heading !font-bowler mb-1 text-center lg:text-left">
              Our mission
            </h4>
            <p className="paragraph">
              MESI is committed to meeting client needs and exceeding client
              expectations. Our mission is to bring our client the best in terms
              of quality and service while building long-term relationships.
              MESI uses a unique technical and professional approach focused on
              sustainability and client service
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
