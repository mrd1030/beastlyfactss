import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

export default function DonateButton({ className, variant = "secondary" }) {
  return (
    <Link to="/donate">
      <Button className={className} variant={variant}>
        <Heart className="mr-2 h-4 w-4 fill-white" />
        Donate
      </Button>
    </Link>
  );
}