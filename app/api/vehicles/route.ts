import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

const vehiclesFilePath = path.join(process.cwd(), 'database', 'vehicles.json');

export async function GET() {
  try {
    const vehiclesData = fs.readFileSync(vehiclesFilePath, 'utf-8');
    const vehicles = JSON.parse(vehiclesData);
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('image') as unknown as File;
    const make = data.get('make') as string;
    const model = data.get('model') as string;
    const year = data.get('year') as string;
    const price = data.get('price') as string;

    if (!file || !make || !model || !year || !price) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    await writeFile(filePath, buffer);

    const vehiclesData = fs.readFileSync(vehiclesFilePath, 'utf-8');
    const vehicles = JSON.parse(vehiclesData);

    const newVehicle = {
      id: Date.now(),
      make,
      model,
      year,
      price,
      imageUrl: `/uploads/${file.name}`,
    };

    vehicles.push(newVehicle);
    fs.writeFileSync(vehiclesFilePath, JSON.stringify(vehicles, null, 2));

    return NextResponse.json({ message: 'Vehicle uploaded successfully', vehicle: newVehicle }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
