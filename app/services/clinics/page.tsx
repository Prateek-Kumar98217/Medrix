"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layouts/main-layout";
import { ServiceProviderCard } from "@/components/services/service-card";
import { ServiceFilters, ServiceFilters as ServiceFiltersType } from "@/components/services/service-filters";
import { clinics } from "@/lib/data/clinics";
import { ServiceProvider } from "@/lib/types";

export default function ClinicsPage() {
  const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>(clinics);

  const handleFilterChange = (filters: ServiceFiltersType) => {
    let results = [...clinics];
    
    // Filter by open now
    if (filters.openNow) {
      results = results.filter(provider => provider.isOpen);
    }
    
    // Filter by availability
    if (filters.availability !== "any") {
      results = results.filter(
        provider => provider.availability?.status === filters.availability
      );
    }
    
    // Sort results
    results.sort((a, b) => {
      switch (filters.sortBy) {
        case "distance":
          return parseFloat(a.distance?.replace(" miles", "") || "0") - 
                 parseFloat(b.distance?.replace(" miles", "") || "0");
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    
    setFilteredProviders(results);
  };

  return (
    <MainLayout>
      <ServiceFilters 
        serviceType="clinic"
        onFilterChange={handleFilterChange}
      />
      
      <div className="container mx-auto px-4 py-8">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium mb-2">No clinics found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map(provider => (
              <ServiceProviderCard 
                key={provider.id} 
                provider={provider}
                serviceType="clinics"
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
} 