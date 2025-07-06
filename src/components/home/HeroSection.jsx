
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react"; // Updated imports based on outline (MapPin removed)
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Sunrise over mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 to-sky-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-lora font-bold text-white leading-tight">
            Discover Peace
            <br />
            <span className=" bg-clip-text text-white">
              Wherever You Travel
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-100 max-w-3xl mx-auto leading-relaxed">
            Experience holistic wellness through yoga, spirituality, and mental health counseling 
            at our centers across India's most beautiful destinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to={createPageUrl("Contact")}>
              <Button 
                size="lg" 
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </Link>
            
            <Link to={createPageUrl("Services")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group"
              >
                <Sparkles className="w-5 h-5 mr-2 transition-colors duration-200" />
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
