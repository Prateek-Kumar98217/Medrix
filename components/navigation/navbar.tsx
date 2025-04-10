"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pharmacies", path: "/services/pharmacies" },
    { name: "Clinics", path: "/services/clinics" },
    { name: "Labs", path: "/services/labs" },
    { name: "Hospitals", path: "/services/hospitals" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          MEDRIX
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`text-sm ${pathname === item.path ? 'font-medium text-primary' : 'text-foreground hover:text-primary'}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm">
          Sign Up
        </Button>
      </div>
    </nav>
  );
} 