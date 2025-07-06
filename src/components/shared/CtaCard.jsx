import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle, Heart, Users } from 'lucide-react';

const CtaCard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500 rounded-full transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full transform translate-x-24 translate-y-24"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          </div>
          
          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-lora font-bold leading-tight text-white">
                  Ready to Begin Your 
                  <span className="block bg-white bg-clip-text text-transparent">
                    Wellness Journey?
                  </span>
                </h2>
                
                <p className="text-xl text-sage-100 leading-relaxed">
                  Join thousands of others who have discovered peace and balance through our holistic approach to wellness. Your transformation starts here.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sage-100">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-sage-100">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Expert Guidance</span>
                </div>
                <div className="flex items-center space-x-2 text-sage-100">
                  <Heart className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Flexible Scheduling</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link to={createPageUrl("Contact")}>
                  <Button 
                    size="lg" 
                    className="group relative bg-white text-sage-700 hover:bg-sage-50 hover:scale-105 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Your Session Today
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Stats/Features */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">5000+</div>
                  <div className="text-sage-100 text-sm font-medium">Happy Clients</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-sage-100 text-sm font-medium">Years Experience</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-sage-100 text-sm font-medium">Programs</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                  <div className="text-sage-100 text-sm font-medium">Client Rating</div>
                </motion.div>
              </div>

              {/* Testimonial Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-white text-lg font-medium mb-4 italic">
                  "The transformation I experienced here changed my life completely. The holistic approach and expert guidance made all the difference."
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Priya Sharma</div>
                    <div className="text-sage-200 text-xs">Yoga Practitioner</div>
                  </div>
                </div>
              </motion.div>

              {/* Special Offer Badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl p-4 text-center transform rotate-1"
              >
                <div className="text-white font-bold text-lg">🎉 Special Offer</div>
                <div className="text-sky-100 text-sm">First session 50% off for new members</div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 px-8 lg:px-16 pb-8">
            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-6 text-sage-200 text-sm">
                  <span>✨ No commitment required</span>
                  <span>📞 24/7 support available</span>
                  <span>🏆 Certified instructors</span>
                </div>
                <div className="text-sage-200 text-sm">
                  <span className="font-semibold">Call now:</span> +91 98765 43210
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaCard;
