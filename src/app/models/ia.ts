export interface IA {
  image: string;
  url: string;
  title: string;
  accessType: accessType;
  price: number | null;
  description: string;
  tags: string[];
}
export interface IAType {
  name: string;
  active: boolean;
}

export type accessType = 'De Pago' | 'Gratis' | 'Freemium' | 'Free Trial';
export interface category {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
