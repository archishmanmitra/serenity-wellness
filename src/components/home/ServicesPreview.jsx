import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Video, MapPin, Calendar, ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      title: "In-Person Sessions",
      description: "Join yoga classes, meditation sessions, and counseling at our beautiful centers across India's top tourist destinations.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: MapPin,
      features: ["Professional instructors", "Scenic locations", "Group & private sessions", "All skill levels welcome"]
    },
    {
      title: "Online Wellness",
      description: "Access live-streamed sessions, recorded content, and one-on-one counseling from anywhere in the world.",
      image: "https://images.unsplash.com/photo-1713428856048-d52b6474b5f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Video,
      features: ["Live streaming", "Recorded sessions", "Personal consultations", "Global accessibility"]
    },
    {
      title: "Retreats & Workshops",
      description: "Immersive wellness experiences designed to deepen your practice and transform your life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Users,
      features: ["Weekend retreats", "Intensive workshops", "Group experiences", "Transformational journeys"]
    }
  ];

  return (
    <section className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-lora font-bold text-sage-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive wellness solutions tailored to your journey, whether you're traveling through India or joining us online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-sage-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">{service.title}</h3>
                <p className="text-sage-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sage-600 text-sm">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={createPageUrl("Services")}>
                  <Button 
                    variant="outline" 
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-100 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("BookSession")}>
            {/* <Button 
              size="lg" 
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-medium text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Session
            </Button> */}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}