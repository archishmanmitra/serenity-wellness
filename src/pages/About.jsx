
import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, Star, Award } from "lucide-react";
import CtaCard from "../components/shared/CtaCard";
import {  MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';


export default function About() {
  const stats = [
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "3+", label: "Centers Across India", icon: Globe },
    { number: "500+", label: "Sessions Conducted", icon: Star },
    { number: "95%", label: "Client Satisfaction", icon: Award }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Lead Yoga Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96c0de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Certified yoga instructor with 10+ years experience in Hatha and Vinyasa yoga."
    },
    {
      name: "Arjun Patel",
      role: "Mental Health Counselor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Licensed therapist specializing in mindfulness-based stress reduction and trauma healing."
    },
    {
      name: "Meera Joshi",
      role: "Meditation & Spirituality Guide",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Spiritual teacher with deep knowledge of ancient Indian meditation practices and philosophy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-sage-100 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-lora font-bold text-sage-800 mb-6">
              About Serenity
            </h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              We're a youth-led initiative dedicated to making wellness accessible to everyone, 
              combining ancient wisdom with modern approaches to mental health and spiritual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful meditation"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-lora font-bold text-sage-800">Our Mission</h2>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  To help people achieve mental clarity, emotional balance, and spiritual growth through 
                  accessible wellness practices. We believe that inner peace and self-discovery should be 
                  part of every journey, whether you're exploring India's beautiful destinations or 
                  seeking wellness from your home.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-lora font-bold text-sage-800">Our Vision</h2>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  A future where inner peace and holistic wellness are accessible to everyone, 
                  regardless of location or background. We envision a world where mental health 
                  support and spiritual guidance are seamlessly integrated into daily life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-lora font-bold text-sage-800 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Since our founding, we've touched countless lives through our holistic approach to wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-sage-800 mb-2">{stat.number}</div>
                <div className="text-sage-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sage-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-lora font-bold text-sage-800 mb-6">
        Your Wellness Journey Awaits
      </h2>
      <p className="text-xl text-sage-600 max-w-3xl mx-auto">
        Discover the perfect path to inner peace and physical wellness through our comprehensive programs designed for every stage of your journey.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-sage-100 rounded-full">
            <span className="text-sage-700 font-medium text-sm">🧘‍♀️ Holistic Approach</span>
          </div>
          <h3 className="text-3xl font-lora font-bold text-sage-800">
            Transform Your Mind, Body & Spirit
          </h3>
          <p className="text-lg text-sage-600 leading-relaxed">
            Our integrated wellness programs combine ancient wisdom with modern techniques to help you achieve lasting transformation. Whether you're a beginner or advanced practitioner, we have the perfect program for you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-sage-700 mb-1">50+</div>
            <div className="text-sage-600 text-sm">Classes Monthly</div>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-sage-700 mb-1">10+</div>
            <div className="text-sage-600 text-sm">Program Types</div>
          </div>
        </div>

        <Link to={createPageUrl("Services")}>
          <Button className="bg-sage-600 hover:bg-sage-900 text-white px-8 py-3 rounded-xl font-semibold">
            Explore Programs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </motion.div>

      {/* Right Content - Program Cards */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {[
          {
            icon: "🧘‍♀️",
            title: "Yoga & Meditation",
            description: "Traditional Hatha, Vinyasa, and mindfulness practices",
            color: "bg-emerald-500"
          },
          {
            icon: "🌿",
            title: "Holistic Healing",
            description: "Ayurvedic treatments and natural wellness therapies",
            color: "bg-sage-500"
          },
          {
            icon: "🏔️",
            title: "Wellness Retreats",
            description: "Immersive experiences in serene natural settings",
            color: "bg-blue-600"
          }
        ].map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-xl  ${program.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-sage-800 mb-2 group-hover:text-sage-700 transition-colors">
                  {program.title}
                </h4>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
              {/* <ArrowRight className="w-5 h-5 text-sage-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all duration-300" /> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Bottom Section - Why Choose Us */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-lora font-bold text-sage-800 mb-4">
          Why Choose Serenity Wellness?
        </h3>
        <p className="text-sage-600 max-w-2xl mx-auto">
          We're committed to providing you with the highest quality wellness experience through our proven methodology and caring approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Instructors",
            description: "Certified professionals with years of experience"
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: "Personalized Care",
            description: "Tailored programs to meet your unique needs"
          },
          {
            icon: <MapPin className="w-8 h-8" />,
            title: "Multiple Locations",
            description: "Convenient centers across beautiful destinations"
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "Flexible Scheduling",
            description: "Classes and sessions that fit your lifestyle"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-sage-600 group-hover:bg-sage-200 group-hover:scale-110 transition-all duration-300">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-sage-800 mb-2">
              {feature.title}
            </h4>
            <p className="text-sage-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* Call to Action */}
      <CtaCard />
    </div>
  );
}
