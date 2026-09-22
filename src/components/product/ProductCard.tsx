import type { Product } from '../../types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <div>{product.name}</div>
      <div>{product.price} {product.currency}</div>
    </article>
  );
}
