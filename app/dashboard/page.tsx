"use client";

import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, ClockIcon, BellIcon, HeartIcon } from "lucide-react";
import { pharmacies } from "@/lib/data/pharmacies";
import { clinics } from "@/lib/data/clinics";
import Link from "next/link";

// Mock data for the dashboard
const recentVisits = [
  { id: "pharm-001", type: "pharmacy", name: "HealthPlus Pharmacy", date: "2 days ago" },
  { id: "clinic-003", type: "clinic", name: "Family Medical Practice", date: "1 week ago" },
  { id: "clinic-002", type: "clinic", name: "City Urgent Care", date: "2 weeks ago" },
];

const savedServices = [
  pharmacies[2], // Community Care Pharmacy
  clinics[0],    // Wellness Care Clinic
  pharmacies[3], // Wellness Pharmacy
];

const healthAlerts = [
  {
    id: 1,
    title: "Prescription Refill Reminder",
    description: "Your prescription for Medication X is due for refill in 3 days.",
    type: "reminder",
    date: "Today"
  },
  {
    id: 2,
    title: "Appointment Confirmation",
    description: "Your appointment with Dr. Smith at Family Medical Practice is confirmed for tomorrow at 2:00 PM.",
    type: "appointment",
    date: "Yesterday"
  },
  {
    id: 3,
    title: "Health Tip",
    description: "Regular health check-ups can help detect potential health issues early.",
    type: "tip",
    date: "3 days ago"
  }
];

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button>Add Service</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Health Score</p>
                <p className="text-2xl font-bold">85/100</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-amber-100 rounded-full p-3 mr-4">
                <ClockIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Upcoming Appointments</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-emerald-100 rounded-full p-3 mr-4">
                <BookmarkIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Saved Services</p>
                <p className="text-2xl font-bold">{savedServices.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <BellIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Alerts</p>
                <p className="text-2xl font-bold">{healthAlerts.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Visits */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Visits</CardTitle>
              <CardDescription>Your recently visited healthcare services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentVisits.map((visit) => (
                  <div key={visit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{visit.name}</h3>
                      <p className="text-sm text-gray-500">{visit.date}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/services/${visit.type}s/${visit.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full">
                  View All History
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Health Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Health Alerts</CardTitle>
              <CardDescription>Your personalized health notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthAlerts.map((alert) => (
                  <div key={alert.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{alert.title}</h3>
                      <span className="text-xs text-gray-500">{alert.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.description}</p>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full">
                  View All Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Saved Services */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Saved Services</h2>
            <Button variant="link">Manage Saved</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium">
                    {service.type.charAt(0).toUpperCase() + service.type.slice(1)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{service.address}, {service.city}</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/services/${service.type}s/${service.id}`}>
                        Details
                      </Link>
                    </Button>
                    <Button variant="secondary" size="sm">Book</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 