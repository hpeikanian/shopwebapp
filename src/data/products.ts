import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'poodin-001',
    slug: 'essential-cotton-tee',
    name: 'Essential Cotton Tee',
    category: 'men',
    price: 39,
    currency: 'USD',
    colors: ['Black', 'White', 'Sand'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [],
    stock: true,
  },
  {
    id: 'poodin-002',
    slug: 'everyday-relaxed-shirt',
    name: 'Everyday Relaxed Shirt',
    category: 'women',
    price: 59,
    currency: 'USD',
    colors: ['White', 'Stone'],
    sizes: ['S', 'M', 'L'],
    images: [],
    stock: true,
  },
];
