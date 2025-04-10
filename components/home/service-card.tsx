import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export function ServiceCard({ title, description, icon: Icon, href, color }: ServiceCardProps) {
  return (
    <Link href={href} className="block transition-transform hover:scale-105">
      <Card className="h-full border-2 hover:border-primary">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className={`p-3 rounded-full mb-4 ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 