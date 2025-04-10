"use client";

import { useState } from "react";
import { AlertCircle, X } from "lucide-react";

const healthAlerts = [
  {
    id: 1,
    title: "Flu Season Alert",
    description: "Flu season is upon us. Remember to get your annual flu shot at your local pharmacy.",
    type: "warning"
  },
  {
    id: 2,
    title: "COVID-19 Booster Shots",
    description: "Updated COVID-19 boosters are now available for all eligible individuals.",
    type: "info"
  },
  {
    id: 3,
    title: "Hydration Reminder",
    description: "Stay hydrated during hot weather. Aim for 8 glasses of water daily.",
    type: "tip"
  }
];

export function HealthAlert() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  const alert = healthAlerts[currentAlert];
  
  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-amber-50 border-amber-200 text-amber-800";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "tip":
        return "bg-emerald-50 border-emerald-200 text-emerald-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };
  
  return (
    <div className={`px-4 py-3 border rounded-lg flex items-start ${getAlertColor(alert.type)}`}>
      <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-medium">{alert.title}</h3>
        <p className="text-sm mt-1">{alert.description}</p>
      </div>
      <button 
        onClick={() => setDismissed(true)}
        className="p-1 rounded-full hover:bg-black/5 flex-shrink-0"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
} 