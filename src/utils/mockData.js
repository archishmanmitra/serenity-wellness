// Mock data for the Serenity Wellness application
// Based on the entity schemas from the entities folder

export const mockCenters = [
  {
    id: "center-1",
    name: "Serenity Rishikesh",
    location: "Rishikesh, Uttarakhand",
    address: "Laxman Jhula Road, Rishikesh, Uttarakhand 249302",
    latitude: 30.0869,
    longitude: 78.2676,
    services: ["Hatha Yoga", "Meditation", "Ayurvedic Massage", "Spiritual Counseling"],
    contact_phone: "+91 98765 43210",
    contact_email: "rishikesh@serenity.com",
    operating_hours: "6:00 AM - 8:00 PM",
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop",
    is_active: true
  },
  {
    id: "center-2",
    name: "Serenity Dharamshala",
    location: "Dharamshala, Himachal Pradesh",
    address: "McLeod Ganj, Dharamshala, Himachal Pradesh 176219",
    latitude: 32.2432,
    longitude: 76.3242,
    services: ["Tibetan Yoga", "Mindfulness Meditation", "Healing Sessions", "Retreat Programs"],
    contact_phone: "+91 98765 43211",
    contact_email: "dharamshala@serenity.com",
    operating_hours: "6:00 AM - 8:00 PM",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    is_active: true
  },
  {
    id: "center-3",
    name: "Serenity Goa",
    location: "Goa",
    address: "Arambol Beach Road, Goa 403524",
    latitude: 15.6869,
    longitude: 73.7043,
    services: ["Beach Yoga", "Meditation", "Wellness Retreats", "Holistic Healing"],
    contact_phone: "+91 98765 43212",
    contact_email: "goa@serenity.com",
    operating_hours: "6:00 AM - 8:00 PM",
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    is_active: true
  },
 
];

export const mockSessions = [
  {
    id: "session-1",
    title: "Hatha Yoga for Beginners",
    type: "yoga",
    mode: "offline",
    center_id: "center-1",
    instructor_name: "Priya Sharma",
    description: "A gentle introduction to Hatha Yoga focusing on basic postures and breathing techniques.",
    date: "2024-01-15",
    time: "09:00 AM",
    duration: 60,
    price: 800,
    max_participants: 15,
    current_participants: 8,
    language: "English",
    level: "beginner",
    is_active: true
  },
  {
    id: "session-2",
    title: "Mindfulness Meditation",
    type: "meditation",
    mode: "online",
    center_id: "center-6",
    instructor_name: "Rajesh Kumar",
    description: "Learn mindfulness techniques to reduce stress and improve mental clarity.",
    date: "2024-01-16",
    time: "06:00 PM",
    duration: 45,
    price: 500,
    max_participants: 50,
    current_participants: 25,
    language: "English",
    level: "all",
    is_active: true
  },
  {
    id: "session-3",
    title: "Weekend Wellness Retreat",
    type: "retreat",
    mode: "offline",
    center_id: "center-2",
    instructor_name: "Dr. Anjali Patel",
    description: "A comprehensive weekend retreat combining yoga, meditation, and wellness activities.",
    date: "2024-01-20",
    time: "08:00 AM",
    duration: 1440, // 24 hours
    price: 5000,
    max_participants: 20,
    current_participants: 12,
    language: "English",
    level: "all",
    is_active: true
  }
];

export const mockBookings = [
  {
    id: "booking-1",
    session_id: "session-1",
    user_email: "john.doe@example.com",
    user_name: "John Doe",
    user_phone: "+91 98765 43210",
    service_category: "In-Person",
    service_name: "Hatha Yoga Classes",
    session_type: "individual",
    preferred_date: "2024-01-15",
    preferred_time: "09:00 AM",
    center_id: "center-1",
    participants: 1,
    total_amount: 800,
    payment_status: "completed",
    booking_status: "confirmed",
    message: "First time yoga session, please guide accordingly.",
    status: "confirmed"
  }
];

// Mock service methods to replace the entity calls
export const Center = {
  list: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockCenters;
  },
  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCenters.find(center => center.id === id);
  }
};

export const Session = {
  list: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockSessions;
  },
  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockSessions.find(session => session.id === id);
  },
  getByCenter: async (centerId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockSessions.filter(session => session.center_id === centerId);
  }
};

export const Booking = {
  create: async (bookingData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newBooking = {
      id: `booking-${Date.now()}`,
      ...bookingData,
      created_at: new Date().toISOString()
    };
    mockBookings.push(newBooking);
    return newBooking;
  },
  list: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockBookings;
  },
  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockBookings.find(booking => booking.id === id);
  }
}; 