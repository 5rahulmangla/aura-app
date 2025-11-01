import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Navigation from './Navigation';
import Hero from './Hero';
import Sphere from './Sphere';
import StatsSection from './StatsSection';
import FAQSection from './FAQSection';
import MarqueeSection from './MarqueeSection';
// import WalletInfo from './components/WalletInfo';
// import WalletButton from './components/WalletButton';
import Roadmap from './Roadmap';
import ContactUs from './ContactUs';
import RevenueChart from './RevenueChart';
import DeveloperSection from './DeveloperSection';
import IntegrationSection from './IntegrationSection';
import SwapPage from './SwapPage';
function HomePage() {
    
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
        {/* <DeveloperSection/> */}
        <MarqueeSection/>
        <IntegrationSection/>
        <StatsSection/>
        {/* <ColorGlowSphere/>
        <RipplePulseSphere/>
        <SwirlSphere/>
        <WaveformSphere/> */}
        <RevenueChart/>
        <Roadmap/>
        <FAQSection/> 
         <SwapPage/>
        <ContactUs/>
        
        {/* <Hero />
        <Sphere />
        <StatsSection /> */}
      </div>


    </div>
  )
}

export default HomePage
