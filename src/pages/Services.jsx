
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CtaCard from "../components/shared/CtaCard";
import {
  MapPin,
  Users,
  Video,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const offlineServices = [
    {
      "title": "Hatha Yoga Classes",
      "description": "Gentle, slow-paced yoga focusing on basic postures and breathing techniques.",
      "duration": "60-90 minutes",
      "price": "₹600",
      "level": "Beginner to Advanced",
      "features": [
        "Professional instruction",
        "Small group settings",
        "Equipment provided",
        "Scenic locations"
      ]
    },
    {
      "title": "Vinyasa Flow Sessions",
      "description": "Dynamic sequences linking breath with movement for strength and flexibility.",
      "duration": "75 minutes",
      "price": "₹600",
      "level": "Intermediate to Advanced",
      "features": [
        "Energizing sequences",
        "Music accompaniment",
        "Props included",
        "Modifications available"
      ]
    },
    {
      "title": "Meditation & Mindfulness",
      "description": "Guided meditation sessions to cultivate inner peace and mental clarity.",
      "duration": "30-45 minutes",
      "price": "₹600",
      "level": "All Levels",
      "features": [
        "Various techniques",
        "Quiet environment",
        "Group meditation",
        "Personal guidance"
      ]
    },
    {
      "title": "Mental Health Counseling",
      "description": "Professional one-on-one counseling sessions for emotional well-being.",
      "duration": "50 minutes",
      "price": "₹1,500",
      "level": "Individual",
      "features": [
        "Licensed therapists",
        "Confidential sessions",
        "Personalized approach",
        "Follow-up support"
      ]
    }
  ];

  const onlineServices = [
    {
      "title": "Live Streaming Yoga",
      "description": "Join live yoga classes from anywhere in the world with real-time instruction.",
      "duration": "60 minutes",
      "price": "₹400",
      "level": "All Levels",
      "features": [
        "HD streaming",
        "Interactive sessions",
        "Real-time feedback",
        "Recorded for later"
      ]
    },
    {
      "title": "Virtual Counseling",
      "description": "Professional mental health support through secure video consultations.",
      "duration": "50 minutes",
      "price": "₹1,200",
      "level": "Individual",
      "features": [
        "Secure platform",
        "Flexible scheduling",
        "Session recordings",
        "24/7 support"
      ]
    },
    {
      "title": "Meditation Library",
      "description": "Access to hundreds of guided meditation sessions for different needs.",
      "duration": "10-60 minutes",
      "price": "₹999/month",
      "level": "All Levels",
      "features": [
        "Extensive library",
        "Download offline",
        "Progress tracking",
        "New content weekly"
      ]
    },
    {
      "title": "Wellness Webinars",
      "description": "Educational sessions on mental health, nutrition, and holistic wellness.",
      "duration": "45 minutes",
      "price": "₹300",
      "level": "All Levels",
      "features": [
        "Expert speakers",
        "Q&A sessions",
        "Downloadable resources",
        "Community access"
      ]
    }
  ];

  const retreats =[
    {
      "title": "Weekend Wellness Retreat",
      "description": "Immersive 2-day experience combining yoga, meditation, and nature therapy.",
      "duration": "2 Days",
      "price": "₹10,000",
      "location": "Rishikesh, Dharamshala",
      "features": [
        "Accommodation",
        "All meals",
        "Multiple sessions",
        "Nature activities"
      ]
    },
    {
      "title": "7-Day Transformation Journey",
      "description": "Deep dive into wellness practices with personalized coaching and healing.",
      "duration": "7 Days",
      "price": "₹30,000",
      "location": "Goa, Kerala",
      "features": [
        "Luxury accommodation",
        "Personal coach",
        "Spa treatments",
        "Excursions"
      ]
    },
    {
      "title": "Monthly Intensive Workshop",
      "description": "One-day intensive workshops focusing on specific wellness topics.",
      "duration": "8 Hours",
      "price": "₹3,000",
      "location": "Multiple Cities",
      "features": [
        "Expert instruction",
        "Materials included",
        "Lunch provided",
        "Certificate"
      ]
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
              Our Services
            </h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive wellness solutions designed to support your journey toward mental clarity,
              emotional balance, and spiritual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offline Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-lora font-bold text-sage-800">In-Person Services</h2>
            </div>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Experience wellness in beautiful locations across India's most serene tourist destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offlineServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-sage-800">{service.title}</h3>
                      <Badge className="bg-sage-50 text-sage-700 rounded-full shadow-lg">
                        {service.level}
                      </Badge>
                    </div>

                    <p className="text-sage-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-sage-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sm text-sage-600">
                        <Star className="w-4 h-4 mr-2" />
                        {service.price}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-sage-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-sage-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={createPageUrl(`Contact?service=${encodeURIComponent(service.title)}`)}>
                      <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                        Book This Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Services */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mr-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-lora font-bold text-sage-800">Online Services</h2>
            </div>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Access our wellness programs from anywhere in the world with our comprehensive online offerings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onlineServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-sage-800">{service.title}</h3>
                      <Badge className="bg-sky-50 text-sky-700 rounded-full shadow-sm">
                        {service.level}
                      </Badge>
                    </div>

                    <p className="text-sage-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-sage-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sm text-sage-600">
                        <Star className="w-4 h-4 mr-2" />
                        {service.price}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-sage-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-sky-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={createPageUrl(`Contact?service=${encodeURIComponent(service.title)}`)}>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                        Book This Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats & Workshops */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-lora font-bold text-sage-800">Retreats & Workshops</h2>
            </div>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Immersive experiences designed to deepen your practice and create lasting transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retreats.map((retreat, index) => (
              <motion.div
                key={retreat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-sage-800 mb-4">{retreat.title}</h3>
                    <p className="text-sage-600 mb-4">{retreat.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-sage-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {retreat.duration}
                      </div>
                      <div className="flex items-center text-sm text-sage-600">
                        <Star className="w-4 h-4 mr-2" />
                        {retreat.price}
                      </div>
                      <div className="flex items-center text-sm text-sage-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {retreat.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {retreat.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-sage-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-sage-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={createPageUrl(`Contact?service=${encodeURIComponent(retreat.title)}`)}>
                      <Button className="w-full bg-black text-white cursor-pointer">
                        Learn More & Book
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaCard />
    </div>
  );
}
