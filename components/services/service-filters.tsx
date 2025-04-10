"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, FilterX, SlidersHorizontal } from "lucide-react";
import { ServiceType } from "@/lib/types";

interface ServiceFiltersProps {
  serviceType: ServiceType;
  onFilterChange: (filters: ServiceFilters) => void;
}

export interface ServiceFilters {
  openNow: boolean;
  availability: "any" | "high" | "medium" | "low";
  sortBy: "distance" | "rating" | "name";
}

const defaultFilters: ServiceFilters = {
  openNow: false,
  availability: "any",
  sortBy: "distance"
};

export function ServiceFilters({ serviceType, onFilterChange }: ServiceFiltersProps) {
  const [filters, setFilters] = useState<ServiceFilters>(defaultFilters);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (filterUpdate: Partial<ServiceFilters>) => {
    const updatedFilters = { ...filters, ...filterUpdate };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters = 
    filters.openNow || 
    filters.availability !== "any" || 
    filters.sortBy !== "distance";

  return (
    <div className="w-full bg-white border-b shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold capitalize">
            {serviceType === "pharmacy" ? "Pharmacies" : 
             serviceType === "clinic" ? "Clinics" :
             serviceType === "lab" ? "Diagnostic Labs" : "Hospitals"}
          </h2>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
            
            <div className="hidden md:flex items-center gap-2">
              <FilterDropdown 
                label="Open Now" 
                isCheckbox
                options={[
                  { value: true, label: "Open Now" }
                ]}
                value={filters.openNow}
                onChange={(value) => handleFilterChange({ openNow: value })}
              />
              
              <FilterDropdown 
                label="Availability" 
                options={[
                  { value: "any", label: "Any Availability" },
                  { value: "high", label: "High Availability" },
                  { value: "medium", label: "Medium Availability" },
                  { value: "low", label: "Low Availability" }
                ]}
                value={filters.availability}
                onChange={(value) => handleFilterChange({ availability: value as any })}
              />
              
              <FilterDropdown 
                label="Sort By" 
                options={[
                  { value: "distance", label: "Distance" },
                  { value: "rating", label: "Rating" },
                  { value: "name", label: "Name" }
                ]}
                value={filters.sortBy}
                onChange={(value) => handleFilterChange({ sortBy: value as any })}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile filters */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <span className="text-sm font-medium">Open Now</span>
                <div className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only"
                      checked={filters.openNow}
                      onChange={(e) => handleFilterChange({ openNow: e.target.checked })}
                    />
                    <div className={`w-4 h-4 border rounded mr-2 flex items-center justify-center ${filters.openNow ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                      {filters.openNow && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm">Show only open</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-sm font-medium">Availability</span>
                <select 
                  className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.availability}
                  onChange={(e) => handleFilterChange({ availability: e.target.value as any })}
                >
                  <option value="any">Any Availability</option>
                  <option value="high">High Availability</option>
                  <option value="medium">Medium Availability</option>
                  <option value="low">Low Availability</option>
                </select>
              </div>
              
              <div className="space-y-2 col-span-2">
                <span className="text-sm font-medium">Sort By</span>
                <div className="grid grid-cols-3 gap-2">
                  {['distance', 'rating', 'name'].map((sort) => (
                    <button
                      key={sort}
                      className={`py-2 px-3 text-sm rounded-md border ${filters.sortBy === sort ? 'bg-primary text-white border-primary' : 'border-gray-300'}`}
                      onClick={() => handleFilterChange({ sortBy: sort as any })}
                    >
                      {sort.charAt(0).toUpperCase() + sort.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetFilters}
                disabled={!hasActiveFilters}
              >
                <FilterX className="h-4 w-4 mr-1" />
                Reset
              </Button>
              <Button 
                size="sm" 
                onClick={() => setIsOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface FilterDropdownProps {
  label: string;
  options: { value: any; label: string }[];
  value: any;
  onChange: (value: any) => void;
  isCheckbox?: boolean;
}

function FilterDropdown({ label, options, value, onChange, isCheckbox = false }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get current selected label
  const getCurrentLabel = () => {
    if (isCheckbox) {
      return label;
    }
    const option = options.find(opt => opt.value === value);
    return option ? option.label : label;
  };
  
  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="sm" 
        className={`flex items-center gap-1.5 ${(isCheckbox && value) || (value !== options[0].value && !isCheckbox) ? 'border-primary text-primary' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getCurrentLabel()}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md border overflow-hidden z-20 w-48">
          <div className="py-1">
            {isCheckbox ? (
              <button
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  onChange(!value);
                  setIsOpen(false);
                }}
              >
                <div className={`w-4 h-4 border rounded mr-2 flex items-center justify-center ${value ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                  {value && <Check className="w-3 h-3 text-white" />}
                </div>
                {options[0].label}
              </button>
            ) : (
              options.map(option => (
                <button
                  key={option.value}
                  className={`flex items-center w-full px-4 py-2 text-sm ${value === option.value ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {value === option.value && (
                    <Check className="h-4 w-4 mr-2 text-primary" />
                  )}
                  {!value === option.value && (
                    <span className="w-4 mr-2" />
                  )}
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
} 