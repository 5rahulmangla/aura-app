
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    id: 1,
    question: "How does your finance tracking system work?",
    answer:
      "Our platform uses advanced algorithms to monitor your spending patterns, income sources, and investment portfolios in real-time. We provide insights and recommendations to help you optimize your financial decisions.",
  },
  {
    id: 2,
    question: "Is my financial data secure?",
    answer:
      "Yes, we use bank-level encryption (AES-256) and comply with all international security standards including PCI-DSS and SOC 2. Your data is protected with multi-factor authentication and never shared with third parties.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, bank transfers, and digital wallets including PayPal, Apple Pay, and Google Pay. All transactions are processed securely through encrypted channels.",
  },
  {
    id: 4,
    question: "Can I export my financial reports?",
    answer:
      "You can export your financial data in multiple formats including PDF, CSV, and Excel. Reports can be customized by date range and include detailed breakdowns of all transactions.",
  },
  {
    id: 5,
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 customer support through multiple channels including live chat, email, and phone. Our average response time is under 5 minutes for urgent issues.",
  },
  {
    id: 6,
    question: "What integrations are available?",
    answer:
      "We integrate with 500+ financial institutions, including banks, investment platforms, and accounting software. We support connections to popular tools like QuickBooks, Xero, and most major cryptocurrency exchanges.",
  },
  {
    id: 7,
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 30-day free trial with full access to all features. No credit card required to get started. After the trial, choose from our flexible pricing plans based on your needs.",
  },
  {
    id: 8,
    question: "How accurate are the financial forecasts?",
    answer:
      "Our AI-powered forecasting system has a 94% accuracy rate based on historical data analysis. We use machine learning models trained on millions of financial transactions to provide reliable predictions.",
  },
]

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(null)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      )

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
              },
            },
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
   <section
  ref={containerRef}
  className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-black overflow-hidden"
>
  <div className="max-w-4xl mx-auto">
    {/* Section Title */}
    <div ref={titleRef} className="mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center text-balance">
        Frequently Asked Questions
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-2xl mx-auto">
        Find answers to common questions about our finance tracking platform and services.
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-3 sm:space-y-4 md:space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          ref={(el) => {
            itemsRef.current[index] = el
          }}
          className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
        >
          <motion.button
            onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:bg-gray-800/50 transition-colors"
            whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-base sm:text-lg md:text-xl font-semibold text-white pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: expandedId === faq.id ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </motion.div>
          </motion.button>

          {/* Answer */}
          <AnimatePresence>
            {expandedId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-700 overflow-hidden"
              >
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gray-800/20">
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>

  {/* ✨ Thin Glossy Bottom Line */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
</section>

  )
}
