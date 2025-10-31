import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Sphere from './components/Sphere';
import ColorGlowSphere from './components/ColorGlowSphere';
import RipplePulseSphere from './components/RipplePulseSphere';
import SwirlSphere from './components/SwirlSphere';
import WaveformSphere from './components/WaveformSphere';
import StatsSection from './components/StatsSection';
import FAQSection from './components/FAQSection';
import MarqueeSection from './components/MarqueeSection';
import WalletInfo from './components/WalletInfo';
import WalletButton from './components/WalletButton';
import Roadmap from './components/Roadmap';
import ContactUs from './components/ContactUs';
import RevenueChart from './components/RevenueChart';
function App() {
    
  const containerRef = useRef(null);

    useEffect(() => {
    // Starfield animation
    const stars = document.querySelectorAll(".star")
    stars.forEach((star, index) => {
      gsap.to(star, {
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(3, 6),
        delay: index * 0.05,
        repeat: -1,
        yoyo: true,
      })
    })
  }, [])

  return (
     <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Starfield background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="star absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

            {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        {/* <WalletInfo/>
        <WalletButton/> */}
        <Hero/>
        <Sphere/>
        <MarqueeSection/>
        <StatsSection/>
        {/* <ColorGlowSphere/>
        <RipplePulseSphere/>
        <SwirlSphere/>
        <WaveformSphere/> */}
        <RevenueChart/>
        <Roadmap/>
        <FAQSection/> 
        <ContactUs/>
        {/* <Hero />
        <Sphere />
        <StatsSection /> */}
      </div>


    </div>
  )
}

export default App
