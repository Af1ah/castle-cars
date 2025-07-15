export interface Car {
  title: string;
  slug: string;
  type: string;
  year: number;
  ownership: string;
  mileage_km: number | string;
  engine: string;
  transmission: string;
  drive: string;
  fuel: string;
  color: string;
  interior: string;
  modifications: string[];
  features: string[];
  condition: string;
  location: string;
  insurance: string;
  loan_available: boolean;
  warranty: string;
  asking_price_inr: number | null;
  images: string[];
}
