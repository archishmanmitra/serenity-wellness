import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const CenterCard = ({ center, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col p-0">
                <img 
                    src={center.image_url} 
                    alt={center.name} 
                    className="w-full aspect-[16/9] object-cover" 
                    style={{ display: 'block' }}
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-lora font-bold text-sage-800 mb-2">{center.name}</h3>
                    <div className="flex items-center text-sage-600 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{center.location}</span>
                    </div>
                    <div className="space-y-2 text-sm text-sage-700 mb-6">
                        <div className="flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-sky-500" />
                            <span>Services: {center.services.join(', ')}</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-sky-500" />
                            <span>{center.contact_phone}</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-sky-500" />
                            <span>{center.contact_email}</span>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <Link to={createPageUrl(`Contact?center=${encodeURIComponent(center.name)}`)}>
                            <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Book at this Center</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CenterCard;