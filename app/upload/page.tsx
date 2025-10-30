"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const vehicleSchema = z.object({
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.string().min(4, 'Year is required'),
  price: z.string().min(1, 'Price is required'),
  image: z.any(),
});

export default function UploadVehicle() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(vehicleSchema),
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  const onSubmit = async (data: any) => {
    setError(null);
    const formData = new FormData();
    formData.append('make', data.make);
    formData.append('model', data.model);
    formData.append('year', data.year);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);

    const response = await fetch('/api/vehicles', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      router.push('/vehicles');
    } else {
      const { message } = await response.json();
      setError(message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload Vehicle</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="make">Make</Label>
                <Input id="make" {...register('make')} />
                {errors.make && <p className="text-red-500 text-sm">{errors.make.message as string}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" {...register('model')} />
                {errors.model && <p className="text-red-500 text-sm">{errors.model.message as string}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" {...register('year')} />
                {errors.year && <p className="text-red-500 text-sm">{errors.year.message as string}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" {...register('price')} />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message as string}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" {...register('image')} />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message as string}</p>}
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full">
                Upload
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
