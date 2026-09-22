export type ProductCategory = 'women' | 'men' | 'kids';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  currency: string;
  images: string[];
  colors: string[];
  sizes: string[];
  stock: boolean;
}
