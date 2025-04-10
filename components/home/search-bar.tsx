"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("New York");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual search functionality
    alert(`Searching for "${searchTerm}" near ${location}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col gap-4">
      <div className="relative flex w-full">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for healthcare services..."
            className="pl-10 h-12 rounded-l-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative min-w-40 border-l">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select
            className="h-12 w-full appearance-none bg-white pl-10 pr-8 rounded-r-lg border-0 focus:ring-2 focus:ring-primary"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>New York</option>
            <option>Chicago</option>
            <option>Los Angeles</option>
            <option>Miami</option>
            <option>Seattle</option>
          </select>
        </div>
        <Button type="submit" className="ml-2 h-12 px-8">
          Search
        </Button>
      </div>
    </form>
  );
} 