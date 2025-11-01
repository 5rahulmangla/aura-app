import { motion } from "framer-motion"
import { useRef } from "react"
import { Rocket, Code2, TrendingUp, Users } from "lucide-react"
import "./roadmap.css"

const roadmapSteps = [
  {
    title: "Phase 1 — Launch",
    description:
      "Project kickoff, community formation, and initial token launch on Solana.",
  },
  {
    title: "Phase 2 — Development",
    description:
      "Building core dApp features, wallet integration, and ecosystem setup.",
  },
  {
    title: "Phase 3 — Expansion",
    description:
      "Marketing campaigns, NFT collaborations, and DAO governance rollout.",
  },
  {
    title: "Phase 4 — Global Growth",
    description:
      "Scaling partnerships, cross-chain integration, and community expansion.",
  },
]

export default function Roadmap() {
  const containerRef = useRef(null)

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-12 bg-black/50 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Roadmap Journey
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
          Our phased plan for innovation, growth, and community empowerment.
        </p>
      </div>

      {/* Timeline */}
      <div
        ref={containerRef}
        className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-10"
      >
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="mb-10 last:mb-0 relative"
          >
            {/* Timeline Dot */}
            {/* <div className="absolute -left-3 sm:-left-5 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur-sm shadow-md">
              {step.icon}
            </div> */}

            {/* Roadmap Card with Moving Glossy Edge */}
            <div className="relative roadmap-card overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-black/40 hover:border-white/40 transition-all p-4 sm:p-6 shadow-lg">
              <div className="edge-glow"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Vertical Gradient Line */}
        <div className="absolute left-[0.9rem] sm:left-[1.3rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
      </div>

      {/* ✨ Bottom Glossy Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  )
}
