"use client"

import { useState } from "react"

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState("individuals")

  const tabs = [
    { id: "individuals", label: "For Individuals" },
    { id: "businesses", label: "For Businesses" },
    { id: "depin", label: "DePIN" },
  ]

  const tabData = {
    individuals: [
      {
        image: "/vault-logo.png",
        title: "Build Your Private Data Vault",
        description:
          "Connect wallets, exchanges, RSS feeds, and social sentiment streams into a single encrypted vault that only you can access. Drag-and-drop widgets let you build dashboards in minutes.",
      },
      {
        image: "/ai-box-logo.png",
        title: "Train Your Own AI",
        description:
          "Spin up a personal Prediction Agent (PA) with just a few clicks. Select indicators, set risk thresholds, and back-test on years of historical data. Perfect for daily trading or long-term portfolio shifts.",
      },
      {
        image: "/connectors-logo.png",
        title: "Monetize Your Edge",
        description:
          "Optionally publish your signals to others and earn $SORO each time someone subscribes. Keep your raw data private while turning insights into passive income.",
      },
    ],
    businesses: [
      {
        image: "/lock-image.png",
        title: "Enterprise-Grade Security",
        description:
          "Our zero-knowledge infrastructure ensures sensitive data is encrypted end-to-end, meeting institutional compliance standards and maintaining full transparency on-chain.",
      },
      {
        image: "/ai-image.png",
        title: "Collaborative AI Workspaces",
        description:
          "Empower teams to build, test, and deploy AI models collaboratively. Integrate APIs, manage datasets, and visualize insights through real-time dashboards.",
      },
      {
        image: "/wallet-image.png",
        title: "Scalable Infrastructure",
        description:
          "Deploy globally distributed compute nodes with sub-second latency and auto-scaling to handle millions of data points per second — optimized for financial workloads.",
      },
    ],
    depin: [
      {
        image: "/data-source-image.png",
        title: "Trustless Data Sources",
        description:
          "On-chain financial applications rely on trustless, low-latency data streams. Our DePIN network ensures decentralized access to accurate, real-time market feeds.",
      },
      {
        image: "/data-image.png",
        title: "Distributed Data Vaults",
        description:
          "Data Vaults act as decentralized warehouses for financial and sentiment data, allowing smooth cross-chain data flows and verifiable storage integrity.",
      },
      {
        image: "/atom-image.png",
        title: "Compute-as-a-Network",
        description:
          "Harness community compute power for AI inference and analytics. The DePIN layer transforms idle nodes into a globally scalable compute grid.",
      },
    ],
  }

  const activeCards = tabData[activeTab]

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Fast & Scalable
              <br />
              Infrastructure
            </h1>
          </div>
          <div className="flex flex-col justify-start md:text-right">
            <p className="text-sm text-muted-foreground">
              Designed for trading desks, hedge funds, and fintech
              <br />
              platforms that need enterprise-grade AI, compliance,
              <br />
              and collaboration.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border border-lime-500/40 bg-lime-500/10 text-lime-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {activeCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background to-background/50 p-8 transition-all hover:border-lime-500/30 hover:shadow-lg hover:shadow-lime-500/10"
            >
              <div className="mb-4 h-16 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
