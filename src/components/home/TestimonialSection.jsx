import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Tourist from Delhi",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "The retreat in Rishikesh was life-changing. The instructors were so knowledgeable and the location was breathtaking. I left feeling refreshed and spiritually connected."
  },
  {
    name: "Johnathan Lee",
    location: "Online Member, California",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "I've been taking the online yoga classes for months. It's the perfect way to de-stress after a long day. The quality of teaching is outstanding, even through a screen."
  },
  {
    name: "Priya Kulkarni",
    location: "Wellness Seeker, Mumbai",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "The counseling sessions provided me with the tools I needed to navigate a difficult period in my life. I'm so grateful for the compassionate and professional support."
  }
];

const TestimonialsSection = () => {
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
            Words from Our Community
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Hear what others have to say about their experience with Serenity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white rounded-2xl shadow-lg border-transparent">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sage-600 italic flex-grow">"{testimonial.text}"</p>
                  <div className="flex items-center mt-6 pt-6 border-t border-sage-100">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-sage-800">{testimonial.name}</p>
                      <p className="text-sm text-sage-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;