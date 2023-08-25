import Image from 'next/image'
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className=" max-w-full min-h-full bg-black opacity-80">
      <HeroSection />
       <Features /> 
       <Pricing />
    </main>
  )
}
