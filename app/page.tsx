import { MainLayout } from "@/components/layouts/main-layout";
import { SearchBar } from "@/components/home/search-bar";
import { ServiceCard } from "@/components/home/service-card";
import { ServiceCarousel } from "@/components/home/service-carousel";
import { HealthAlert } from "@/components/home/health-alert";
import { Pill, Stethoscope, Microscope, Building2 } from "lucide-react";

export default function Home() {
  const serviceCategories = [
    {
      title: "Pharmacies",
      description: "Find medication and health supplies near you",
      icon: Pill,
      href: "/services/pharmacies",
      color: "bg-blue-100"
    },
    {
      title: "Clinics",
      description: "Local clinics for immediate healthcare needs",
      icon: Stethoscope,
      href: "/services/clinics",
      color: "bg-green-100"
    },
    {
      title: "Diagnostic Labs",
      description: "Blood tests, imaging, and other diagnostics",
      icon: Microscope,
      href: "/services/labs",
      color: "bg-purple-100"
    },
    {
      title: "Hospitals",
      description: "Emergency services and specialized care",
      icon: Building2,
      href: "/services/hospitals",
      color: "bg-amber-100"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Your Health, <span className="text-primary">Your Location</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover healthcare services near you, from pharmacies and clinics to hospitals
            </p>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Health Alert */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <HealthAlert />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Healthcare Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Healthcare Services</h2>
            <a href="#" className="text-primary hover:underline text-sm font-medium">
              View all
            </a>
          </div>
          <ServiceCarousel />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-sm opacity-80">Pharmacies</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">250+</p>
              <p className="text-sm opacity-80">Clinics</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-sm opacity-80">Diagnostic Labs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm opacity-80">Hospitals</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
