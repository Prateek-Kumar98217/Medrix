export type ServiceType = 'pharmacy' | 'clinic' | 'lab' | 'hospital';

export interface ServiceProvider {
  id: string;
  name: string;
  type: ServiceType;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website?: string;
  description: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  distance?: string; // This would be calculated based on user location
  isOpen?: boolean; // This would be calculated based on current time and hours
  availability?: {
    status: 'high' | 'medium' | 'low';
    message: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
} 