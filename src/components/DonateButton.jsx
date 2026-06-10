import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

export default function DonateButton({ className, variant = "secondary" }) {
  return (
    /* FIX: We swap the order and add asChild so only ONE focusable <a> element is rendered */
    <Button asChild className={className} variant={variant}>
      <Link to="/donate">
        <Heart className="mr-2 h-4 w-4 fill-white" />
        Donate
      </Link>
    </Button>
  );
}