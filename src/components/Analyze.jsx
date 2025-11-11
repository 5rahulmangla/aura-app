import { CheckCircle2 } from "lucide-react"

export default function Analyze() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Centered Container */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-16 md:py-24">
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left mb-12 lg:mb-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#bfff00]/30 bg-[#bfff00]/10">
            <CheckCircle2 className="w-4 h-4 text-[#bfff00]" />
            <span className="text-sm font-medium text-[#bfff00]">Join Waitlist</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Predict the Future with Predictive AI
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            Soro User-Facing Platform For Everyday Financial Intelligence
          </p>

          {/* CTA button */}
          <button className="bg-[#bfff00] hover:bg-[#a8e600] text-black font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(191,255,0,0.3)] transition-all">
            Join Waitlist
          </button>
        </div>

        {/* Right Content - Repeated Video */}
        <div className="flex-1 relative flex items-center justify-center w-full lg:w-1/2">
          <div className="relative w-[60%] h-80 flex items-center justify-center">
            
            {/* Background glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-[#bfff00]/20 rounded-full blur-3xl opacity-40"></div>
            </div>

            {/* Video */}
            <video
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              src="/soroAnalytics.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

      </div>
    </main>
  )
}
