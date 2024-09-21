'use client';
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css"; // Important for map visibility
import { motion, useInView } from "framer-motion";

// Dynamically import the MapContainer from react-leaflet without SSR
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const GeoJSON = dynamic(() => import("react-leaflet").then((mod) => mod.GeoJSON), { ssr: false });

// Region colors
const regionColors = {
  Canada: "#a2b665",
  "US & Caribbean": "#74c69d",
  Asia: "#f4a261",
  Neighbor: "#ffcc00",
  Default: "#d9d9d9",
};

// Define regions by country code
const regions = {
  Canada: ["CAN"],
  "US & Caribbean": ["USA", "CUB", "MEX"],
  Asia: ["CHN", "IND", "JPN"],
  Neighbor: ["USA", "CUB", "MEX", "CHN", "IND", "JPN"],
};

// Region labels for tooltips
const regionLabels = {
  Canada: ">200 Canadian Projects",
  "US & Caribbean": "10 US & Caribbean Projects",
  Asia: "10 Asian Projects",
  Neighbor: "Neighboring Country",
};

// Custom style function for regions
const style = (feature) => {
  const regionName = Object.keys(regions).find((region) =>
    regions[region].includes(feature.id)
  );
  return {
    fillColor: regionColors[regionName] || regionColors.Default,
    weight: 1,
    opacity: 1,
    color: "#8a8a8a",
    fillOpacity: regionName ? 1 : 0,
  };
};

// Disable hover effect
const onEachFeature = (feature, layer) => {
  const regionName = Object.keys(regions).find((region) =>
    regions[region].includes(feature.id)
  );
  if (regionName) {
    const label = regionLabels[regionName];
    if (label) {
      layer.bindTooltip(label, {
        permanent: true,
        direction: "top",
        className: 'bg-[#D9D9D9] p-0 lg:p-[5px] rounded-[4px] text-[8px] lg:text-[11px] custom-tooltip',
        offset: [0, -10],
      });
    }
  }
};

const AnimatedMap = ({ zoom, maxZoom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const headingVariants = {
    initial: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch("/countries.geo.json");
        if (!response.ok) {
          throw new Error("Failed to load geo data.");
        }
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error("GeoJSON fetch error:", error);
      }
    };

    fetchGeoData();
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-24 lg:my-0">
      <motion.h2
        ref={ref}
        variants={headingVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="heading !text-3xl lg:!text-5xl text-center mb-4 lg:mb-2"
      >
        PROJECT LOCATIONS
      </motion.h2>
      <MapContainer
        center={[56, 0]}
        zoom={zoom}
        maxZoom={maxZoom}
        className="w-full lg:w-[80%] mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      >
        {geoData && (
          <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature} />
        )}
      </MapContainer>
    </div>
  );
};

export default AnimatedMap;