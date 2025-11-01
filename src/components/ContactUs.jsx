import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-black px-6 py-16">
      <div className="relative bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 w-full max-w-4xl text-white shadow-[0_0_40px_rgba(255,255,255,0.04)] overflow-hidden">

        {/* Glossy animated border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          <div className="absolute inset-0 rounded-3xl border border-white/10 before:absolute before:inset-0 before:rounded-3xl before:bg-[linear-gradient(130deg,rgba(255,255,255,0.03)_10%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.03)_90%)] before:animate-[moveGloss_6s_linear_infinite] before:bg-[length:300%_300%]"></div>
        </div>

        {/* Header */}
       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent tracking-wide">
  Contact Us
</h2>


        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info Section */}
           <div className="text-center max-w-2xl mx-auto mb-10">
  <p className="text-white/70 leading-relaxed text-lg sm:text-xl">
    Got <span className="text-white font-semibold">questions</span>, 
    <span className="text-white font-semibold"> feedback</span>, or 
    <span className="text-white font-semibold"> collaboration ideas</span>?  
    <br className="hidden sm:block" />
    Drop us a message — we’ll get back to you shortly.
  </p>
</div>



          {/* Right Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-white/70 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Gloss Animation Keyframes */}
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

export default ContactUs;
