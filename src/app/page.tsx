import Image from 'next/image'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import Pricing from "../components/Pricing";
import Working from "../components/Working";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import Diagnosis from "../components/Diagnosis"

export default function Home() {
  return (
    <main className=" max-w-full min-h-full bg-[#191A29]">
      <Navbar />
      <HeroSection />
       <Features /> 
       <Pricing />
       <Working />
       <Diagnosis />
       <Contact />
       <Footer />
    </main>
  )
}
