import Image from 'next/image'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import Pricing from "../components/Pricing";
import Working from "../components/Working";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className=" max-w-full min-h-full bg-[#191F29]">
      <Navbar />
      <HeroSection />
       <Features /> 
       <Pricing />
       <Working />
       <Contact />
    </main>
  )
}
