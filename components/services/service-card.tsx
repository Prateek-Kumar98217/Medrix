"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, MapPin, Clock } from "lucide-react";
import { ServiceProvider } from "@/lib/types";

interface ServiceCardProps {
  provider: ServiceProvider;
  serviceType: string;
}

export function ServiceProviderCard({ provider, serviceType }: ServiceCardProps) {
  // Get availability badge styling
  const getAvailabilityStyle = (status: 'high' | 'medium' | 'low') => {
    switch(status) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Link 
      href={`/services/${serviceType}/${provider.id}`}
      className="block transition-all hover:shadow-md"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={provider.imageUrl} 
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
            {provider.isOpen ? (
              <span className="text-green-600">Open Now</span>
            ) : (
              <span className="text-red-600">Closed</span>
            )}
          </div>
        </div>
        
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{provider.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm font-medium">{provider.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({provider.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
            <span className="truncate">{provider.address}, {provider.city}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Clock className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
            <span>{provider.hours.monday !== "Closed" ? provider.hours.monday : "Hours vary"}</span>
          </div>
          
          {provider.availability && (
            <div className={`border rounded-full px-3 py-1 text-xs font-medium inline-block ${getAvailabilityStyle(provider.availability.status)}`}>
              {provider.availability.message}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="text-xs text-gray-500">{provider.distance} away</div>
          <div className="text-xs font-medium text-primary">View Details →</div>
        </CardFooter>
      </Card>
    </Link>
  );
} 