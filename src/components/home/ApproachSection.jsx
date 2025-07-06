import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Sprout, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const approaches = [
    {
        icon: Sprout,
        title: "Yoga & Movement",
        description: "Connect mind and body through ancient yoga practices. Our classes, suitable for all levels, focus on building strength, flexibility, and inner balance in serene environments.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        icon: BrainCircuit,
        title: "Meditation & Mindfulness",
        description: "Cultivate a calm and focused mind with our guided meditation sessions. Learn techniques to reduce stress, improve concentration, and achieve a state of profound peace.",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        icon: HeartHandshake,
        title: "Mental Health Counseling",
        description: "Receive compassionate and professional support from our licensed counselors. We offer a safe space to explore challenges, build resilience, and foster emotional well-being.",
        image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const ApproachSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {approaches.map((approach, index) => (
                    <motion.div
                        key={approach.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
                    >
                        {/* Text Content */}
                        <div className={`space-y-6 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                            <div className="inline-flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-sage-100 to-sky-100 rounded-full flex items-center justify-center">
                                    <approach.icon className="w-6 h-6 text-sage-600" />
                                </div>
                                <h2 className="text-3xl font-lora font-bold text-sage-800">{approach.title}</h2>
                            </div>
                            <p className="text-lg text-sage-600 leading-relaxed">{approach.description}</p>
                            <Link to={createPageUrl("Services")}>
                                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-100">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Image */}
                        <div className={`rounded-3xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                            <img src={approach.image} alt={approach.title} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ApproachSection;