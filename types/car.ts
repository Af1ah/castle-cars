export interface CarDetails {
  id: string
  title: string
  year: number
  price: number
  images: string[]
  mileage: number
  transmission: string
  make: string
  model: string
  fuelType: string
  engine: string
  drivetrain: string
  exterior: string
  interior: string
  location?: string

  // Optional detailed information
  optionalDetails?: {
    ownerHistory?: string // e.g., "3rd owner", "Single owner"
    serviceHistory?: string // e.g., "Major service done at 120k (at showroom)"
    tyreCondition?: string // e.g., "New continental tyres (99%)"
    modifications?: string[] // e.g., ["10.5 android screen", "M5 Alloy wheels"]
    condition?: string // e.g., "Zero faults", "Excellent condition"
    documentation?: string[] // e.g., ["NOC available", "RC available"]
    financing?: string // e.g., "Finance available", "Finance not available"
    insurance?: string // e.g., "Insurance valid till 2024"
    additionalFeatures?: string[]
    inspectionReport?: string
    warrantyInfo?: string
    lastServiceDate?: string
    nextServiceDue?: string
  }

  features: string[]
  description: string
}
