"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface FeaturedService {
  id: string;
  name: string;
  type: string;
  image: string;
  rating: number;
  distance: string;
  status: "open" | "closed";
}

const featuredServices: FeaturedService[] = [
  {
    id: "1",
    name: "City Medical Center",
    type: "Hospital",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=350&fit=crop",
    rating: 4.8,
    distance: "0.8 miles",
    status: "open"
  },
  {
    id: "2",
    name: "HealthPlus Pharmacy",
    type: "Pharmacy",
    image: "https://images.unsplash.com/photo-1624764874746-8082f76a7133?w=500&h=350&fit=crop",
    rating: 4.6,
    distance: "1.2 miles",
    status: "open"
  },
  {
    id: "3", 
    name: "Wellness Care Clinic",
    type: "Clinic",
    image: "https://images.unsplash.com/photo-1516549655646-840978d86347?w=500&h=350&fit=crop",
    rating: 4.5,
    distance: "2.1 miles",
    status: "closed"
  },
  {
    id: "4",
    name: "Central Diagnostics",
    type: "Lab",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
    rating: 4.7,
    distance: "1.5 miles",
    status: "open"
  },
  {
    id: "5",
    name: "Metro General Hospital",
    type: "Hospital",
    image: "https://images.unsplash.com/photo-1516549655646-840978d86347?w=500&h=350&fit=crop", 
    rating: 4.9,
    distance: "3.2 miles",
    status: "open"
  }
];

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, featuredServices.length - 3);
  
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  
  return (
    <div className="relative w-full">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white shadow-md"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {featuredServices.map((service) => (
            <div key={service.id} className="min-w-[33.33%] p-2 shrink-0">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium">
                    {service.status === "open" ? (
                      <span className="text-green-600">Open Now</span>
                    ) : (
                      <span className="text-red-600">Closed</span>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.type}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-4 py-3 border-t bg-gray-50">
                  <span className="text-xs text-gray-500">{service.distance} away</span>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white shadow-md"
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 