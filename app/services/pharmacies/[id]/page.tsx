"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pharmacies } from "@/lib/data/pharmacies";
import { Clock, Globe, Mail, MapPin, Phone, Star } from "lucide-react";

export default function PharmacyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'reviews'>('overview');
  
  const pharmacy = pharmacies.find(p => p.id === id);
  
  if (!pharmacy) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Pharmacy Not Found</h1>
          <p className="mb-8">The pharmacy you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/services/pharmacies">Back to Pharmacies</a>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      {/* Hero section with image and basic info */}
      <div className="relative bg-gray-100 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/5">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <img
                  src={pharmacy.imageUrl}
                  alt={pharmacy.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-3/5">
              <div className="flex items-center mb-2">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${pharmacy.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {pharmacy.isOpen ? 'Open Now' : 'Closed'}
                </div>
                <div className="mx-2 text-gray-300">|</div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-medium">{pharmacy.rating}</span>
                  <span className="text-gray-500 ml-1">({pharmacy.reviewCount} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-3">{pharmacy.name}</h1>
              
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">{pharmacy.address}</p>
                    <p className="text-gray-700">{pharmacy.city}, {pharmacy.state} {pharmacy.zipCode}</p>
                    <p className="text-sm text-gray-500 mt-1">{pharmacy.distance} away</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
                  <a href={`tel:${pharmacy.phone}`} className="text-primary hover:underline">
                    {pharmacy.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
                  <a href={`mailto:${pharmacy.email}`} className="text-primary hover:underline">
                    {pharmacy.email}
                  </a>
                </div>
                
                {pharmacy.website && (
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
                    <a href={pharmacy.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {pharmacy.website.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <Button size="lg" className="mr-3">
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs for different sections */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${activeTab === 'services' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 mb-6">{pharmacy.description}</p>
              
              {pharmacy.availability && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Availability</h3>
                  <div className={`inline-block px-4 py-2 rounded-lg text-sm ${
                    pharmacy.availability.status === 'high' ? 'bg-green-100 text-green-800' :
                    pharmacy.availability.status === 'medium' ? 'bg-amber-100 text-amber-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {pharmacy.availability.message}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-medium mb-3">Business Hours</h3>
                <div className="space-y-2">
                  {Object.entries(pharmacy.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Location</h3>
                  <div className="aspect-square rounded-lg bg-gray-200 mb-4 overflow-hidden">
                    <img 
                      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+627eea(${pharmacy.coordinates.lng},${pharmacy.coordinates.lat})/${pharmacy.coordinates.lng},${pharmacy.coordinates.lat},13,0/400x400?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGVhcmVkLWNsZWFyZWQtY2xlYXIiLCJzZmEiOjB9.cleared-cleared-cleared`}
                      alt="Map location"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{pharmacy.address}</p>
                      <p className="text-gray-700">{pharmacy.city}, {pharmacy.state} {pharmacy.zipCode}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === 'services' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pharmacy.services.map((service) => (
                <Card key={service} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">{service}</h3>
                    <p className="text-sm text-gray-500">
                      {/* This would be replaced with actual service descriptions */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Customer Reviews</h2>
              <Button>Write a Review</Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{pharmacy.rating}</h3>
                  <div className="flex items-center mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(pharmacy.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{pharmacy.reviewCount} reviews</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Rating Breakdown</div>
                  <div className="text-sm">
                    <div className="flex items-center justify-end">
                      <span className="mr-2">5</span>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    {/* Other rating bars would go here */}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Mock reviews - would be replaced with actual reviews */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">John D.</h3>
                    <span className="text-gray-500 text-sm">2 weeks ago</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {Array(5).fill(0).map((_, j) => (
                      <Star 
                        key={j} 
                        className={`w-4 h-4 ${j < 4 + (i % 2) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Great service! The staff was very helpful and answered all my questions.
                    Wait time was minimal and they had all the medications I needed in stock.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 