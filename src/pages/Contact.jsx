import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { mockCenters } from '@/utils/mockData';

const servicesByCategory = {
  'In-Person': [
    "Hatha Yoga Classes", "Vinyasa Flow Sessions", "Meditation & Mindfulness", "Mental Health Counseling"
  ],
  'Online': [
    "Live Streaming Yoga", "Virtual Counseling", "Meditation Library Access", "Wellness Webinars"
  ],
  'Retreats': [
    "Weekend Wellness Retreat", "7-Day Transformation Journey", "Monthly Intensive Workshop"
  ]
};

const availableTimes = ['07:00 AM','09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(servicesByCategory)[0]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedCenter, setSelectedCenter] = useState('');
  const [centers, setCenters] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
});

  useEffect(() => {
    // Use mock data for centers
    setCenters(mockCenters);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (date && selectedTime && selectedService) {
      // For in-person and retreats, also check if center is selected
      if ((selectedCategory === 'In-Person' || selectedCategory === 'Retreats') && !selectedCenter) {
        setBookingStatus('error');
        setTimeout(() => setBookingStatus(null), 5000);
        return;
      }
      setBookingStatus('success');
      setTimeout(() => setBookingStatus(null), 5000);
    } else {
      setBookingStatus('error');
      setTimeout(() => setBookingStatus(null), 5000);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Handle send message logic here
    alert('Message sent successfully!');
  };

  const requiresCenter = selectedCategory === 'In-Person' || selectedCategory === 'Retreats';

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
            Contact & Bookings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-sage-600 max-w-3xl mx-auto"
          >
            We're here to help you on your wellness journey. Reach out with questions or book your session below.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-lora text-sage-800">Book Your Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                       {/* Contact Information */}
                    <div>
                      <Label className="font-semibold text-sage-700 mb-2 block">1. Your Contact Information</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sage-600">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sage-600">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="email" className="text-sage-600">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                      <Label className="font-semibold text-sage-700 mb-2 mt-4 block">2. Choose Your Service</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"><SelectValue placeholder="Select Category" /></SelectTrigger>
                          <SelectContent className="bg-white">
                            {Object.keys(servicesByCategory).map(cat => 
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"><SelectValue placeholder="Select Specific Service" /></SelectTrigger>
                          <SelectContent className="bg-white">
                            {servicesByCategory[selectedCategory]?.map(serv => 
                              <SelectItem key={serv} value={serv}>{serv}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {requiresCenter && (
                      <div>
                        <Label className="font-semibold text-sage-700 mb-2 block">3. Choose Your Center Location</Label>
                        <Select value={selectedCenter} onValueChange={setSelectedCenter}>
                          <SelectTrigger className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0">
                            <SelectValue placeholder="Select a center location" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {centers.map(center => (
                              <SelectItem key={center.id} value={center.name}>
                                {center.name} - {center.location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-sage-600 mt-1">
                          Choose the center where you'd like to attend your session.
                        </p>
                      </div>
                    )}

                   

                    {/* Date and Time Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-sage-700">Preferred Date & Time</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Preferred Date</Label>
                          <div className="mt-1 shadow-sm rounded-lg p-3">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Preferred Time</Label>
                          
                          <div className="grid grid-cols-2 mt-6 gap-2">
                            {availableTimes.map(time => (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                className={`transition-colors ${selectedTime === time ? 'bg-sky-600 hover:bg-sky-700 mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0' : 'mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0'}`}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-4">All times are in your local timezone.</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message">Additional Requirements or Questions</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                        placeholder="Let us know about any specific needs, health conditions, or questions..."
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button
                      onClick={handleBooking}
                      size="lg"
                      className="w-full bg-sage-600 text-white shadow-lg transition-colors duration-300 ease-in-out hover:text-sage-600 hover:border-sage-600 hover:border-2"
                      disabled={!selectedService || !date || !selectedTime || (requiresCenter && !selectedCenter) || !formData.name || !formData.email || !formData.phone}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                  
                  {bookingStatus === 'success' && (
                    <Alert className="mt-4 border-green-500 text-green-700">
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>Booking Confirmed!</AlertTitle>
                      <AlertDescription>
                        We've received your request for <strong>{selectedService}</strong>
                        {selectedCenter && ` at ${selectedCenter}`} on {format(date, 'PPP')} at {selectedTime}.
                        A confirmation email is on its way to {formData.email}.
                      </AlertDescription>
                    </Alert>
                  )}

                  {bookingStatus === 'error' && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertTitle>Incomplete Booking</AlertTitle>
                      <AlertDescription>
                        Please make sure you have selected a service, {requiresCenter && 'center location, '}date, time, and filled in all contact information.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="mt-8 text-xs text-gray-500">
                    <h4 className="font-semibold mb-1">Terms & Conditions</h4>
                    <p>Cancellations must be made at least 24 hours in advance for a full refund. Payments are processed upon confirmation. For subscription-based services, the plan renews automatically unless cancelled.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Form */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="shadow-lg rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-lora text-sage-800">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <InfoItem icon={MapPin} text="Main Center: Rishikesh, Uttarakhand, India" />
                    <InfoItem icon={Phone} text="+91 98765 43210" />
                    <InfoItem icon={Mail} text="hello@serenity.com" />
                    <InfoItem icon={Clock} text="Mon - Sun: 6:00 AM - 8:00 PM (IST)" />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="shadow-lg rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-lora text-sage-800">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSendMessage} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="font-semibold text-sage-700 ">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-semibold text-sage-700">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="font-semibold text-sage-700">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Your question or message..." 
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-2 focus:ring-sage-400 focus:outline-none border-0 resize-none"
                          rows={4}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-sage-600 text-white shadow-lg transition-colors duration-300 ease-in-out hover:text-sage-600 hover:border-sage-600 hover:border-2"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-start">
      <Icon className="w-5 h-5 text-sage-500 mt-1 mr-4 flex-shrink-0" />
      <span className="text-sage-700">{text}</span>
    </div>
  );
}
