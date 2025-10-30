import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { put } from '@vercel/blob';

export async function GET() {
  try {
    const vehicleIds = await kv.lrange('vehicles', 0, -1);
    const vehicles = await Promise.all(vehicleIds.map(id => kv.get(`vehicle:${id}`)));
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const userCookie = req.cookies.get('user');
    if (!userCookie) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.formData();
    const file: File | null = data.get('image') as unknown as File;
    const make = data.get('make') as string;
    const model = data.get('model') as string;
    const year = data.get('year') as string;
    const price = data.get('price') as string;

import { v4 as uuidv4 } from 'uuid';

// ... (other code)
    if (!file || !make || !model || !year || !price) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { url } = await put(file.name, file, { access: 'public' });

    const id = uuidv4();
    const newVehicle = {
      id,
      make,
      model,
      year,
      price,
      imageUrl: url,
    };

    await kv.set(`vehicle:${id}`, newVehicle);
    await kv.lpush('vehicles', id);

    return NextResponse.json({ message: 'Vehicle uploaded successfully', vehicle: newVehicle }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
