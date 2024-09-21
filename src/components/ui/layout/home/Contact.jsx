"use client";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
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
    <div className="w-full lg:w-[90%] mx-auto xl:h-screen" id="contact">
      <div
        className="relative video-container"
        onMouseEnter={() => setControlsVisible(true)}
        onMouseLeave={() => setControlsVisible(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-[450px] lg:h-full object-cover transform rotate-180"  // Add the rotation here
          muted
          playsInline
          controls={controlsVisible ? "controls" : undefined}
        >
          <source src="/assets/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="w-60 font-geometria font-light leading-[50px] lg:leading-[80px] inline-block absolute top-10 lg:top-20 left-5 lg:left-20 text-4xl lg:text-[70px] text-white uppercase">
          Contact Information
        </h2>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-14 absolute bottom-10 lg:bottom-20 left-5 lg:left-20">
          <div>
            <h5 className="text-sm lg:text-xl text-white uppercase mb-3 font-geometria font-semibold">
              Address
            </h5>
            <span className="font-normal font-geometria text-white text-sm lg:text-xl">
              2995 140 Street Surrey BC <br />
              V4P2C3
            </span>
          </div>

          <div>
            <h5 className="text-sm lg:text-xl text-white uppercase mb-3 font-geometria font-semibold">
              Email
            </h5>
            <span className="font-normal font-geometria text-white text-sm lg:text-xl">
              sunnymangat@me-si.ca
            </span>
          </div>

          <div>
            <h5 className="text-sm lg:text-xl text-white uppercase mb-3 font-geometria font-semibold">
              Phone
            </h5>
            <span className="font-normal font-geometria text-white text-sm lg:text-xl">
              (604) 358 2900
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;