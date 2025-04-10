import { ServiceProvider } from "../types";

export const pharmacies: ServiceProvider[] = [
  {
    id: "pharm-001",
    name: "HealthPlus Pharmacy",
    type: "pharmacy",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "(212) 555-1234",
    email: "info@healthpluspharmacy.com",
    website: "https://healthpluspharmacy.com",
    description: "Your neighborhood pharmacy offering prescription services, OTC medications, and health consultations.",
    hours: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "10:00 AM - 6:00 PM"
    },
    services: [
      "Prescription Filling",
      "Medication Consultation",
      "Immunizations",
      "Health Screenings",
      "Medical Supplies"
    ],
    rating: 4.6,
    reviewCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1624764874746-8082f76a7133?w=500&h=350&fit=crop",
    distance: "1.2 miles",
    isOpen: true,
    availability: {
      status: "high",
      message: "Most medications in stock"
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "pharm-002",
    name: "MediCare Pharmacy",
    type: "pharmacy",
    address: "456 Park Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10022",
    phone: "(212) 555-5678",
    email: "contact@medicarepharmacy.com",
    description: "Full-service pharmacy with drive-thru and 24/7 prescription services.",
    hours: {
      monday: "24 hours",
      tuesday: "24 hours",
      wednesday: "24 hours",
      thursday: "24 hours",
      friday: "24 hours",
      saturday: "24 hours",
      sunday: "24 hours"
    },
    services: [
      "24/7 Prescription Services",
      "Drive-Thru Pickup",
      "Compounding",
      "Delivery Services",
      "Medication Therapy Management"
    ],
    rating: 4.3,
    reviewCount: 92,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=350&fit=crop",
    distance: "2.5 miles",
    isOpen: true,
    availability: {
      status: "medium",
      message: "Some medications may require ordering"
    },
    coordinates: {
      lat: 40.7636,
      lng: -73.9729
    }
  },
  {
    id: "pharm-003",
    name: "Community Care Pharmacy",
    type: "pharmacy",
    address: "789 Broadway",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    phone: "(212) 555-9012",
    email: "help@communitycarepharmacy.com",
    website: "https://communitycarepharmacy.com",
    description: "A locally owned pharmacy focusing on personalized patient care and community health.",
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed"
    },
    services: [
      "Prescription Services",
      "Medication Synchronization",
      "Medication Packaging",
      "Health Screenings",
      "Wellness Consultations"
    ],
    rating: 4.8,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=350&fit=crop",
    distance: "0.8 miles",
    isOpen: false,
    availability: {
      status: "high",
      message: "Most medications in stock"
    },
    coordinates: {
      lat: 40.7352,
      lng: -73.9911
    }
  },
  {
    id: "pharm-004",
    name: "Wellness Pharmacy",
    type: "pharmacy",
    address: "321 Lexington Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10016",
    phone: "(212) 555-3456",
    email: "service@wellnesspharmacy.com",
    description: "Specializing in holistic health with traditional and natural remedies.",
    hours: {
      monday: "8:30 AM - 8:00 PM",
      tuesday: "8:30 AM - 8:00 PM",
      wednesday: "8:30 AM - 8:00 PM",
      thursday: "8:30 AM - 8:00 PM",
      friday: "8:30 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM"
    },
    services: [
      "Prescription Services",
      "Natural Health Products",
      "Compounding",
      "Nutritional Counseling",
      "Homeopathic Remedies"
    ],
    rating: 4.5,
    reviewCount: 87,
    imageUrl: "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?w=500&h=350&fit=crop",
    distance: "1.7 miles",
    isOpen: true,
    availability: {
      status: "high",
      message: "Wide selection available"
    },
    coordinates: {
      lat: 40.7489,
      lng: -73.9773
    }
  },
  {
    id: "pharm-005",
    name: "Metro Pharmacy",
    type: "pharmacy",
    address: "654 5th Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    phone: "(212) 555-7890",
    email: "info@metropharmacy.com",
    website: "https://metropharmacy.com",
    description: "Modern pharmacy with automated prescription filling and digital health services.",
    hours: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "8:00 AM - 9:00 PM",
      sunday: "9:00 AM - 8:00 PM"
    },
    services: [
      "Express Prescription Filling",
      "Digital Health Portal",
      "Medication Home Delivery",
      "Immunizations",
      "Health Screenings"
    ],
    rating: 4.2,
    reviewCount: 107,
    imageUrl: "https://images.unsplash.com/photo-1576602975754-efdf313b9342?w=500&h=350&fit=crop",
    distance: "3.1 miles",
    isOpen: true,
    availability: {
      status: "medium",
      message: "Popular medications in stock"
    },
    coordinates: {
      lat: 40.7618,
      lng: -73.9715
    }
  }
]; 