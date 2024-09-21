import Banner from "@/components/ui/layout/home/Banner";
import Contact from "@/components/ui/layout/home/Contact";
import OurPeople from "@/components/ui/layout/home/OurPeople";
import Projects from "@/components/ui/layout/home/Projects";
import Services from "@/components/ui/layout/home/Services";
import Sustainability from "@/components/ui/layout/home/Sustainability";
import WhatWeDo from "@/components/ui/layout/home/WhatWeDo";
import WhoWeAre from "@/components/ui/layout/home/WhoWeAre";
import Map from "@/components/ui/layout/Map";

export default function Home() {
  return <main className="">
    <Banner/>
    <WhoWeAre/>
    <WhatWeDo/>
    <Services/>
    <Projects/>
    <OurPeople/>
    <Map/>
    <Sustainability/>
    <Contact/>
  </main>;
}
