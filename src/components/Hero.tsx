import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-teal-50 text-teal-600 border-teal-200 font-medium rounded-full">
                <span className="mr-1 text-amber-500">✨</span> Pre-Launch Special Offer — Limited Time Only
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the tools & <span className="text-gradient">resources</span> top Indie makers are using to <span className="relative">
                grow
                <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 349 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13.5C34.6667 6.16666 109.6 -5.69998 174 13.5C238.4 32.7 315.167 13.3333 348 2.99999" stroke="#38b2ac" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span> their businesses!
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Limited time offer—Get access before the price goes up! Join 100+ successful makers using our proven tools and resources.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md hover:shadow-xl transition-all duration-200 rounded-xl w-full sm:w-auto">
                <span className="mr-2">🚀</span> Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="group hover:text-teal-600 hover:border-teal-300 transition-colors duration-200 rounded-xl w-full sm:w-auto">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-4 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Build Faster</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Fluff</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Launch today</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Feature Stats */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Feature Stat 1 */}
            <motion.div
              className="glassmorphism p-6 rounded-2xl"
              whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-teal-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-1">300<span className="text-teal-500">+</span></h3>
              <p className="font-medium text-gray-900 mb-1">Proven Business Ideas</p>
              <p className="text-sm text-gray-600">Hand-picked profitable niches with market validation</p>
            </motion.div>

            {/* Feature Stat 2 */}
            <motion.div
              className="glassmorphism p-6 rounded-2xl"
              whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-teal-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-1">100<span className="text-teal-500">+</span></h3>
              <p className="font-medium text-gray-900 mb-1">Tools & Resources</p>
              <p className="text-sm text-gray-600">Curated collection of essential business tools</p>
            </motion.div>

            {/* Feature Stat 3 */}
            <motion.div
              className="glassmorphism p-6 rounded-2xl"
              whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-teal-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-1">50<span className="text-teal-500">+</span></h3>
              <p className="font-medium text-gray-900 mb-1">Revenue Streams</p>
              <p className="text-sm text-gray-600">Different ways to monetize your online business</p>
            </motion.div>

            {/* Feature Stat 4 */}
            <motion.div
              className="glassmorphism p-6 rounded-2xl"
              whileHover={{ y: -5, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-teal-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-1">30<span className="text-teal-500">+</span></h3>
              <p className="font-medium text-gray-900 mb-1">Marketplaces</p>
              <p className="text-sm text-gray-600">Platforms to sell your products and services</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
