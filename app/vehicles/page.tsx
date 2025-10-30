"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: string;
  price: string;
  imageUrl: string;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles');
      if (response.ok) {
        const data = await response.json();
        setVehicles(data);
      }
    };
    fetchVehicles();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Vehicles</h1>
        <div>
          <Button asChild>
            <Link href="/upload">Upload Vehicle</Link>
          </Button>
          <Button onClick={handleLogout} variant="destructive" className="ml-4">
            Logout
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <CardHeader>
              <CardTitle>{vehicle.make} {vehicle.model}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-48">
                <Image src={vehicle.imageUrl} alt={`${vehicle.make} ${vehicle.model}`} layout="fill" objectFit="cover" />
              </div>
              <p className="mt-4 text-lg font-semibold">${vehicle.price}</p>
              <p className="text-sm text-gray-500">{vehicle.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
