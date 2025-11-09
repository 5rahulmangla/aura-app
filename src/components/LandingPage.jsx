
import { useNavigate } from "react-router-dom";
import "./landingpage.css";
import PinkSphere from "./PinkSphere";

export default function LandingPage() {
  const navigate = useNavigate();

  const avatars = [
  { name: "Alice", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "James", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sophia", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Michael", img: "https://randomuser.me/api/portraits/men/83.jpg" },
  { name: "Liam", img: "https://randomuser.me/api/portraits/men/12.jpg" },
];


  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0010] to-[#1a001f] flex flex-col items-center justify-center text-center px-4">
      
      {/* ✨ Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 🌌 Animated Pink Sphere */}
      <PinkSphere />

      {/* 💫 Ambient glow behind everything */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] h-[1500px] pointer-events-none blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(255,0,200,0.25), transparent 70%)",
        }}
      />

      {/* 🌈 Floating neon arc under dashboard */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[90%] max-w-3xl pointer-events-none">
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,250 Q500,0 1000,250"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,0,180,0.9)" />
              <stop offset="70%" stopColor="rgba(255,0,150,0.5)" />
              <stop offset="100%" stopColor="rgba(255,0,200,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 🌟 Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Mini badge */}
        <div className="inline-block px-5 py-2 rounded-full bg-gray-900/60 border border-pink-500/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,150,0.2)]">
          <span className="text-xs sm:text-sm text-pink-200 tracking-wide">
            Smarter, Faster, Borderless Finance
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Command Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Financial Universe
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Visualize, track, and execute — all from one powerful dashboard
          designed to simplify your digital asset management experience.
        </p>

        {/* Dashboard preview card */}
        <div className="relative mx-auto w-full max-w-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-pink-500/20 rounded-3xl shadow-[0_0_60px_rgba(255,0,150,0.2)] backdrop-blur-xl p-6 sm:p-8 overflow-hidden hover:shadow-[0_0_100px_rgba(255,0,180,0.25)] transition-shadow duration-700">
          
          {/* Animated gradient rim */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none animate-borderSweep" />

          {/* Header */}
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500" />
              <h3 className="text-lg font-semibold text-white">Lubox</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Active</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-left relative z-10">
            {[
              { title: "Current Balance", value: "$7,000.75", change: "+3.45%", color: "green" },
              { title: "Total Savings", value: "$5,300.50", change: "+4.21%", color: "green" },
              { title: "Total Income", value: "$28,750.75", change: "+12.1%", color: "green" },
              { title: "Total Expenses", value: "$21,450.00", change: "−3.2%", color: "red" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50 hover:bg-slate-800/40 transition-all duration-300"
              >
                <p className="text-xs text-gray-400 mb-1">{item.title}</p>
                <h4 className="text-xl font-semibold text-white">{item.value}</h4>
                <p
                  className={`text-xs ${
                    item.color === "green" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.change}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                    <div className="flex -space-x-3">
                        {avatars.map((user, i) => (
                            <img
                            key={i}
                            src={user.img}
                            alt={user.name}
                            className="w-9 h-9 rounded-full border-2 border-slate-800 hover:z-10 hover:scale-110 transition-transform duration-300"
                            title={user.name}
                            />
                        ))}
            </div>

            <button
              onClick={() => navigate("/home")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,150,0.4)]"
            >
              Explore →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
