import { SERVICES_LIST } from "@/constant";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container my-10 relative">
      <h4 className=" mb-10 heading !text-[#944118]">
        SERVICES
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST?.map((service, index) => (
          <div className="" key={index}>
            <h4 className="heading !font-bowler !text-base lg:!text-2xl tracking-[#0.049em] mb-3">
              {service?.heading}
            </h4>
            <ul className="flex flex-col gap-1 pl-8">
              {service?.items?.map((item, index) => (
                <li
                  className="uppercase text-sm lg:text-base tracking-[0.049em] list-disc text-black font-geometria"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="absolute top-[-147px] left-[-64px] z-[-1]">
        <Image
          src="/assets/gradient-2.png"
          alt=""
          width={360}
          height={300}
          className="w-[400px] h-[300px] inline-block"
        />
      </div>
      <div className="absolute -bottom-60 lg:bottom-[50px] right-[10px] z-[-1] rotate-90">
        <Image
          src="/assets/gradient-1.png"
          alt=""
          width={274}
          height={367}
          className="w-auto h-[400px] inline-block"
        />
      </div>
    </div>
  );
};

export default Services;
