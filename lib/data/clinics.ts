import { ServiceProvider } from "../types";

export const clinics: ServiceProvider[] = [
  {
    id: "clinic-001",
    name: "Wellness Care Clinic",
    type: "clinic",
    address: "123 Health Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "(212) 555-1111",
    email: "appointments@wellnesscareclinic.com",
    website: "https://wellnesscareclinic.com",
    description: "A primary care clinic offering comprehensive healthcare services for the whole family.",
    hours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed"
    },
    services: [
      "Primary Care",
      "Annual Check-ups",
      "Vaccinations",
      "Minor Procedures",
      "Telehealth Consultations"
    ],
    rating: 4.5,
    reviewCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1516549655646-840978d86347?w=500&h=350&fit=crop",
    distance: "2.1 miles",
    isOpen: true,
    availability: {
      status: "medium",
      message: "Limited slots available today"
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "clinic-002",
    name: "City Urgent Care",
    type: "clinic",
    address: "456 Urgent Street",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    phone: "(212) 555-2222",
    email: "info@cityurgentcare.com",
    description: "Walk-in urgent care clinic for non-life-threatening illnesses and injuries.",
    hours: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "8:00 AM - 8:00 PM",
      sunday: "8:00 AM - 8:00 PM"
    },
    services: [
      "Urgent Care",
      "X-rays",
      "Lab Testing",
      "Minor Emergencies",
      "Sports Physicals"
    ],
    rating: 4.2,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1519494080410-f5d41826cab9?w=500&h=350&fit=crop",
    distance: "1.8 miles",
    isOpen: true,
    availability: {
      status: "high",
      message: "Short wait times now"
    },
    coordinates: {
      lat: 40.7150,
      lng: -73.9950
    }
  },
  {
    id: "clinic-003",
    name: "Family Medical Practice",
    type: "clinic",
    address: "789 Family Road",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    phone: "(212) 555-3333",
    email: "care@familymedicalpractice.com",
    website: "https://familymedicalpractice.com",
    description: "Family-focused medical practice providing personalized care across generations.",
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Family Medicine",
      "Pediatrics",
      "Geriatrics",
      "Chronic Disease Management",
      "Preventive Care"
    ],
    rating: 4.7,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=350&fit=crop",
    distance: "3.2 miles",
    isOpen: false,
    availability: {
      status: "medium",
      message: "Appointments available later this week"
    },
    coordinates: {
      lat: 40.7300,
      lng: -74.0100
    }
  },
  {
    id: "clinic-004",
    name: "Metro Health Clinic",
    type: "clinic",
    address: "321 Metro Boulevard",
    city: "New York",
    state: "NY",
    zipCode: "10004",
    phone: "(212) 555-4444",
    email: "appointments@metrohealthclinic.com",
    description: "Modern clinic with state-of-the-art facilities and specialized care teams.",
    hours: {
      monday: "8:00 AM - 7:00 PM",
      tuesday: "8:00 AM - 7:00 PM",
      wednesday: "8:00 AM - 7:00 PM",
      thursday: "8:00 AM - 7:00 PM",
      friday: "8:00 AM - 7:00 PM",
      saturday: "9:00 AM - 3:00 PM",
      sunday: "Closed"
    },
    services: [
      "General Medicine",
      "Women's Health",
      "Men's Health",
      "Behavioral Health",
      "Nutritional Counseling"
    ],
    rating: 4.4,
    reviewCount: 102,
    imageUrl: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=500&h=350&fit=crop",
    distance: "2.7 miles",
    isOpen: true,
    availability: {
      status: "low",
      message: "Limited availability this week"
    },
    coordinates: {
      lat: 40.7050,
      lng: -74.0100
    }
  },
  {
    id: "clinic-005",
    name: "Community Health Center",
    type: "clinic",
    address: "654 Community Square",
    city: "New York",
    state: "NY",
    zipCode: "10005",
    phone: "(212) 555-5555",
    email: "info@communityhealthcenter.org",
    website: "https://communityhealthcenter.org",
    description: "Non-profit clinic providing affordable healthcare services to underserved populations.",
    hours: {
      monday: "8:30 AM - 5:30 PM",
      tuesday: "8:30 AM - 5:30 PM",
      wednesday: "8:30 AM - 5:30 PM",
      thursday: "8:30 AM - 5:30 PM",
      friday: "8:30 AM - 5:30 PM",
      saturday: "9:00 AM - 12:00 PM",
      sunday: "Closed"
    },
    services: [
      "Primary Care",
      "Dental Services",
      "Mental Health",
      "WIC Program",
      "Community Outreach"
    ],
    rating: 4.6,
    reviewCount: 178,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=350&fit=crop",
    distance: "1.5 miles",
    isOpen: true,
    availability: {
      status: "high",
      message: "Walk-ins welcome today"
    },
    coordinates: {
      lat: 40.7200,
      lng: -74.0000
    }
  }
];