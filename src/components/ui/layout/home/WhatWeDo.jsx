import { SERVICES } from "@/constant";
import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto pb-10" id="whatwedo">
      <h4 className=" mb-3 heading">
        WHAT WE DO
      </h4>
      <p className="paragraph mb-7">
        MESI provides planning, assessments, designs, construction and
        monitoring services for municipal, industrial, residential, commercial
        infrastructure
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-0">
        {SERVICES?.map((service, index) => (
          <div className="" key={index}>
            <Image
              src={service?.img}
              ast="service"
              width={200}
              height={170}
              className="w-full h-[172px] object-cover"
            />
            <span className="font-normal font-geometria text-gray text-[15px] uppercase text-center inline-block w-full">
              {service?.heading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
