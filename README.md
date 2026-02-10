# Castle Cars 🚗

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/af1ahs-projects/v0-castle-cars)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/ADoYPTV9PxJ)
[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **Premium Used Car Dealership Platform** - A modern, full-stack web application for Castle Cars, Kerala's most trusted automotive partner located in Vengara, Malappuram.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 About

Castle Cars is a premium used car dealership platform showcasing high-quality vehicles in Kerala, India. With over 111K+ Instagram followers (@castle_cars_), this platform serves as the digital storefront for one of Kerala's most trusted automotive partners.

**Location:** Vengara, Malappuram, Kerala 676304  
**Hours:** Monday-Sunday, 9:00 AM - 8:00 PM  
**Phone:** +91 82487 23357

## ✨ Features

### Customer-Facing Features
- **🏠 Homepage**: Dynamic hero section with featured cars, testimonials, and location information
- **🚘 Vehicle Browsing**: Browse extensive inventory with detailed specifications
- **🔍 Advanced Search**: Filter cars by type, year, price, transmission, and fuel type
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **🖼️ Image Gallery**: High-quality vehicle images with carousel functionality
- **📝 Vehicle Details**: Comprehensive car information including:
  - Specifications (year, mileage, engine, transmission)
  - Features and modifications
  - Pricing and loan availability
  - Warranty and insurance information
  - Location and condition status

### Business Features
- **👤 User Authentication**: Secure login and registration system
- **📤 Vehicle Upload**: Admin interface for adding new vehicles to inventory
- **💰 Sell Your Car**: Form for customers to sell their vehicles
- **🔧 Car Care**: Information about maintenance and care services
- **📞 Contact Form**: Direct communication with the dealership
- **✉️ Email Notifications**: Automated email system for inquiries

### Technical Features
- **⚡ Server-Side Rendering**: Fast page loads with Next.js 15
- **🎨 Modern UI**: Beautiful interface with Tailwind CSS and Radix UI
- **🗄️ Data Storage**: Vercel KV (Redis) for vehicle and user data
- **☁️ Image Storage**: Vercel Blob for scalable image hosting
- **🔐 Secure Authentication**: bcrypt password hashing
- **📧 Email Integration**: nodemailer for transactional emails
- **🌓 Dark Mode**: Dark theme optimized design
- **♿ Accessibility**: WCAG compliant components

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Carousel**: Embla Carousel
- **Date Picker**: React Day Picker
- **Theme**: next-themes for dark mode

### Backend
- **Runtime**: Node.js
- **Framework**: Next.js API Routes
- **Database**: Vercel KV (Redis)
- **File Storage**: Vercel Blob
- **Authentication**: Custom auth with bcrypt
- **Email**: nodemailer

### Development Tools
- **Package Manager**: npm/pnpm
- **Linting**: ESLint
- **Build Tool**: Next.js compiler

## 📁 Project Structure

```
castle-cars/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── auth/            # Authentication endpoints
│   │   ├── email/           # Email sending endpoints
│   │   └── vehicles/        # Vehicle CRUD endpoints
│   ├── cars/                # Vehicle listing pages
│   ├── car-care/            # Car care service page
│   ├── contact/             # Contact page
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── sell/                # Sell your car page
│   ├── upload/              # Vehicle upload page (admin)
│   ├── vehicles/            # Vehicle inventory page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections (Hero, Featured Cars, etc.)
│   └── ui/                  # Reusable UI components
├── constants/               # App constants
│   ├── cars.ts              # Sample car data
│   ├── seo.ts               # SEO constants
│   └── theme.ts             # Theme configuration
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional styles
├── types/                   # TypeScript type definitions
│   └── car.ts               # Car interface
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Af1ah/castle-cars.git
   cd castle-cars
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Vercel KV (Redis) - For data storage
KV_URL=your_kv_url
KV_REST_API_URL=your_kv_rest_api_url
KV_REST_API_TOKEN=your_kv_rest_api_token
KV_REST_API_READ_ONLY_TOKEN=your_kv_rest_api_read_only_token

# Vercel Blob - For image storage
BLOB_READ_WRITE_TOKEN=your_blob_token

# Email Configuration (optional)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password
```

### Setting Up Vercel Storage

#### Vercel KV Setup
1. Go to your Vercel dashboard → Storage tab
2. Click "Create" → Select "KV (Redis)"
3. Name your store and select a region
4. Connect to your project
5. Copy the environment variables to your project settings

#### Vercel Blob Setup
1. Go to your Vercel dashboard → Storage tab
2. Click "Create" → Select "Blob"
3. Name your store and connect to your project
4. Copy the `BLOB_READ_WRITE_TOKEN` to your project settings

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Workflow

1. **Code Changes**: Make your changes in the appropriate directory
2. **Testing**: Test locally with `npm run dev`
3. **Linting**: Run `npm run lint` to check code quality
4. **Build**: Verify production build with `npm run build`
5. **Commit**: Commit your changes with descriptive messages

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe"
}
```

#### POST `/api/auth/login`
Authenticate user and create session.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### POST `/api/auth/logout`
Log out current user and destroy session.

### Vehicle Endpoints

#### GET `/api/vehicles`
Retrieve all vehicles from the inventory.

**Response:**
```json
[
  {
    "title": "2019 BMW M5 Competition",
    "slug": "bmw-m5-competition-2019",
    "type": "Sedan",
    "year": 2019,
    "price": 8500000,
    ...
  }
]
```

#### POST `/api/vehicles`
Add a new vehicle to the inventory (requires authentication).

### Email Endpoints

#### POST `/api/email`
Send contact form or inquiry email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Interested in the BMW M5",
  "phone": "+91 1234567890"
}
```

## 🚀 Deployment

This project is configured for seamless deployment on Vercel.

### Automatic Deployment

The project is automatically synced with [v0.dev](https://v0.dev) deployments:
1. Changes made on v0.dev are automatically pushed to this repository
2. Vercel automatically deploys updates from the repository
3. Live site: [https://vercel.com/af1ahs-projects/v0-castle-cars](https://vercel.com/af1ahs-projects/v0-castle-cars)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   - Add all required environment variables in Vercel dashboard
   - Link Vercel KV and Blob storage to your project

### Production Checklist

- [ ] All environment variables configured
- [ ] Vercel KV database linked
- [ ] Vercel Blob storage linked
- [ ] Email service configured
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active
- [ ] Analytics configured (optional)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all components are properly typed
- Run linter before committing

## 📞 Contact

**Castle Cars**
- **Location**: Vengara, Malappuram, Kerala 676304
- **Phone**: +91 82487 23357
- **Instagram**: [@castle_cars_](https://instagram.com/castle_cars_) (111K+ followers)
- **Website**: [Castle Cars](https://castlecars.com)

**Project Links**
- **GitHub**: [Af1ah/castle-cars](https://github.com/Af1ah/castle-cars)
- **v0.dev Project**: [Build on v0](https://v0.dev/chat/projects/ADoYPTV9PxJ)
- **Live Site**: [View on Vercel](https://vercel.com/af1ahs-projects/v0-castle-cars)

---

<div align="center">

**Built with ❤️ using [Next.js](https://nextjs.org/) and [v0.dev](https://v0.dev)**

*This project is automatically synced with v0.dev deployments*

</div>
