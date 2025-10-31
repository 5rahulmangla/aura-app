
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0)
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.2,
      )
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.4)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-24 px-4">
      <h1 ref={headingRef} className="text-6xl md:text-7xl font-bold text-center mb-6 max-w-3xl">
        Track your finance
      </h1>
      <p ref={subheadingRef} className="text-center text-white/70 max-w-2xl mb-8 text-lg">
        We diligently track your every step to forecast your income for future years. We work with the best financial
        experts.
      </p>
      <div ref={buttonsRef} className="flex gap-4 justify-center">
        <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-medium flex items-center gap-2">
          Get started
          <span>→</span>
        </button>
        <button className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition-colors font-medium flex items-center gap-2">
          Read more
          <span>→</span>
        </button>
      </div>
    </div>
  )
}
