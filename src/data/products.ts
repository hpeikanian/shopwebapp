import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'poodin-001',
    name: 'Essential Cotton Tee',
    category: 'Men',
    price: 39,
    currency: 'USD',
    colors: ['Black', 'White', 'Sand'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [],
    inStock: true,
  },
  {
    id: 'poodin-002',
    name: 'Everyday Relaxed Shirt',
    category: 'Women',
    price: 59,
    currency: 'USD',
    colors: ['White', 'Stone'],
    sizes: ['S', 'M', 'L'],
    images: [],
    inStock: true,
  },
];
