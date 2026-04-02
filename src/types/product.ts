export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  subcategory: string;
  weight: string;
  weightOptions: string[];
  deliveryTime: string;
  tags: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  icon?: string;
  subcategories?: SubCategory[];
  group: 'fresh' | 'grocery' | 'snacks';
}

export interface SubCategory {
  id: string;
  name: string;
  image: string;
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  bgColor: string;
}

export interface PromoCard {
  id: string;
  title: string;
  image: string;
  bgColor: string;
}

export interface DealProduct {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  weight: string;
}
