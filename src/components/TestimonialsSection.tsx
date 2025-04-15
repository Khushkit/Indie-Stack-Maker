import { motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder",
    company: "Digital Marketing Agency",
    text: "\"The Indie Maker Stack transformed my business. Within 3 months, I went from struggling to find clients to having a fully booked schedule. The tools and resources are game-changing!\"",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Indie Developer",
    company: "PixelPerfect Apps",
    text: "\"As a solo developer, I was overwhelmed with all the aspects of running a business. The Indie Maker Stack gave me a clear roadmap and saved me countless hours of research and trial-and-error.\"",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Creator",
    company: "Design Essentials",
    text: "\"I've purchased many business resources before, but none have been as comprehensive and actionable as this. The tools alone are worth 10x the price. Highly recommended for any serious indie maker.\"",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "NexTech Solutions",
    text: "\"The business ideas section alone helped me pivot my struggling startup to a profitable niche I hadn't considered. Now we're growing at 15% month over month. Best investment I've made this year.\"",
    avatar: "DK"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Join <span className="text-gradient">+100 Makers</span> Building their Businesses
          </h2>
          <p className="text-lg text-gray-600">
            See what our community members are saying about their journey
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-teal-700 p-8 md:p-10 text-white flex flex-col justify-center items-center">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-teal-100 text-sm">{testimonials[activeIndex].role}</p>
                    <p className="text-teal-100 text-sm">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 text-lg italic mb-4">
                      {testimonials[activeIndex].text}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === activeIndex ? 'bg-teal-500' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Previous testimonial"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Next testimonial"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-12 h-12 bg-teal-100 rounded-lg transform rotate-45 z-0"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-12 h-12 bg-teal-200 rounded-lg transform rotate-12 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
