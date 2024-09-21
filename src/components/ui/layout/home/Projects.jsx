"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const videoRef = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="container py-20">
      <h2 className="heading  !text-2xl lg:!text-4xl">
        Recently Completed Projects
      </h2>
      {/* font-normal text-[#141512] uppercase text-5xl */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-16">
        <div className="relative">
          <Image
            src="/assets/project1.png"
            width={300}
            height={380}
            alt=""
            className="w-full h-[380px] object-cover"
          />
          <h4 className="font-geometria absolute top-0 left-1/2 -translate-x-1/2 font-normal text-[33px] text-white">
            Wastewater
          </h4>
        </div>
        <div className="relative">
          <Image
            src="/assets/project2.png"
            width={300}
            height={380}
            alt=""
            className="w-full h-[380px] object-cover"
          />
          <h4 className="font-geometria absolute top-0 left-1/2 -translate-x-1/2 font-normal text-[33px] text-white">
            Biogas
          </h4>
        </div>
        <div
          className="relative video-container"
          onMouseEnter={() => setControlsVisible(true)}
          onMouseLeave={() => setControlsVisible(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-[380px] object-cover"
            muted
            playsInline
            controls={controlsVisible ? "controls" : undefined}
          >
            <source
              src="/assets/storm.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <h4 className="font-geometria w-full text-center absolute top-0 left-1/2 -translate-x-1/2 font-normal text-[33px] text-white">
            Strom Water
          </h4>
        </div>
        <div className="relative">
          <Image
            src="/assets/project3.png"
            width={300}
            height={380}
            alt=""
            className="w-full h-[380px] object-cover"
          />
          <h4 className="font-geometria w-full text-center absolute top-0 left-1/2 -translate-x-1/2 font-normal text-[33px] text-white">
            Water Treatment
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
