import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDownUp, Wallet, Coins } from "lucide-react"

export default function SwapSection() {
  const [fromToken, setFromToken] = useState("SOL")
  const [toToken, setToToken] = useState("USDC")
  const [amount, setAmount] = useState("")
  const tokens = ["SOL", "USDC", "BONK", "RAY", "SRM"]

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/50 overflow-hidden">
      {/* Section Container */}
      <div className="max-w-md mx-auto border border-white/20 rounded-2xl bg-black/40 backdrop-blur-md p-6 sm:p-8 shadow-lg hover:border-white/40 transition-all">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Swap</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-white/80 hover:bg-white/10 transition-all text-sm">
            <Wallet className="w-4 h-4" /> Connect
          </button>
        </div>

        {/* From Token */}
        <div className="mb-4">
          <label className="text-sm text-white/60">From</label>
          <div className="flex justify-between items-center mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent text-white text-xl outline-none w-1/2"
            />
            <select
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="bg-black/40 text-white text-sm border border-white/10 rounded-lg px-3 py-2 focus:outline-none cursor-pointer"
            >
              {tokens.map((token) => (
                <option key={token} value={token} className="bg-black">
                  {token}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center my-3">
          <motion.button
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              const temp = fromToken
              setFromToken(toToken)
              setToToken(temp)
            }}
            className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowDownUp className="text-white w-5 h-5" />
          </motion.button>
        </div>

        {/* To Token */}
        <div className="mb-6">
          <label className="text-sm text-white/60">To</label>
          <div className="flex justify-between items-center mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <span className="text-white text-xl">≈ 0.00</span>
            <select
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              className="bg-black/40 text-white text-sm border border-white/10 rounded-lg px-3 py-2 focus:outline-none cursor-pointer"
            >
              {tokens.map((token) => (
                <option key={token} value={token} className="bg-black">
                  {token}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl 
          bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 
          hover:from-purple-500/50 hover:to-pink-500/50 
          text-white font-semibold tracking-wide 
          border border-white/10 transition-all"
        >
          <Coins className="w-5 h-5" />
          Swap Now
        </motion.button>
      </div>

      {/* Glossy horizontal line at end */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  )
}
