import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Center } from '@/utils/mockData';
import CenterCard from '../components/centers/CenterCard';
import CtaCard from '../components/shared/CtaCard';
import { Loader } from 'lucide-react';

export default function CentersPage() {
    const [centers, setCenters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCenters = async () => {
            setIsLoading(true);
            const data = await Center.list();
            setCenters(data);
            setIsLoading(false);
        };
        fetchCenters();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-sage-100 to-sky-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-lora font-bold text-sage-800 mb-4"
                    >
                        Find Your Sanctuary
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-sage-600 max-w-3xl mx-auto"
                    >
                        Explore our serene wellness centers located in India's most beautiful and spiritually rich destinations.
                    </motion.p>
                </div>
            </section>

            {/* Centers Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader className="w-12 h-12 text-sage-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {centers.map((center, index) => (
                                <CenterCard key={center.id} center={center} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            
            <CtaCard />
        </div>
    );
}