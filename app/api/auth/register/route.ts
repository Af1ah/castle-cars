import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'database', 'users.json');

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);

    const userExists = users.find((user: any) => user.email === email);

    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    users.push({ email, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    console.log('User created successfully');
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
