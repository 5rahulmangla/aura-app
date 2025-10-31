import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueChart = () => {
  const [period, setPeriod] = useState("weekly");

  const data = {
    weekly: [
      { name: "M", revenue: 2200 },
      { name: "T", revenue: 1600 },
      { name: "W", revenue: 3000 },
      { name: "T", revenue: 2000 },
      { name: "F", revenue: 2500 },
      { name: "S", revenue: 2800 },
      { name: "S", revenue: 2100 },
    ],
    monthly: [
      { name: "Week 1", revenue: 12000 },
      { name: "Week 2", revenue: 18000 },
      { name: "Week 3", revenue: 14000 },
      { name: "Week 4", revenue: 20000 },
    ],
    yearly: [
      { name: "Jan", revenue: 12000 },
      { name: "Feb", revenue: 15000 },
      { name: "Mar", revenue: 18000 },
      { name: "Apr", revenue: 20000 },
      { name: "May", revenue: 17000 },
      { name: "Jun", revenue: 22000 },
      { name: "Jul", revenue: 24000 },
      { name: "Aug", revenue: 21000 },
      { name: "Sep", revenue: 19000 },
      { name: "Oct", revenue: 23000 },
      { name: "Nov", revenue: 25000 },
      { name: "Dec", revenue: 27000 },
    ],
  };

  const totalRevenue = data[period].reduce((acc, cur) => acc + cur.revenue, 0);
  const growth = "+4%";

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-black px-6">
      <div className="relative bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 w-full max-w-5xl text-white shadow-[0_0_40px_rgba(255,255,255,0.04)] overflow-hidden">

        {/* 🔮 Subtle glossy edge effect */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          <div className="absolute inset-0 rounded-3xl border border-white/10 before:absolute before:inset-0 before:rounded-3xl before:bg-[linear-gradient(130deg,rgba(255,255,255,0.03)_10%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.03)_90%)] before:animate-[moveGloss_6s_linear_infinite] before:bg-[length:300%_300%]"></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-sm text-white/70 font-medium tracking-wide">
            Revenue Overview
          </h2>
          <div className="flex gap-3">
            {["weekly", "monthly", "yearly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`text-xs px-4 py-1.5 rounded-full transition-colors ${
                  period === p
                    ? "bg-white text-black font-medium"
                    : "bg-white/10 hover:bg-white/20 text-white/70"
                }`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data[period]}
              margin={{ top: 10, right: 30, bottom: 10, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="revenue"
                radius={[6, 6, 0, 0]}
                fill="url(#barGradient)"
                barSize={24}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="text-sm text-white/60">Total revenue</p>
            <p className="text-3xl font-semibold">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>
          <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-white/80">
            {growth}
          </div>
        </div>

        {/* Gloss Animation */}
        <style>{`
          @keyframes moveGloss {
            0% { background-position: 100% 0%; }
            50% { background-position: 0% 100%; }
            100% { background-position: 100% 0%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RevenueChart;
