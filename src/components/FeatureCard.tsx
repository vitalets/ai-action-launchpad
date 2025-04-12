
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="border border-border/30 shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 p-2 rounded-full w-fit mb-3">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
