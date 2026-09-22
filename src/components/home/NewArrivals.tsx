import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export function NewArrivals() {
  return (
    <section>
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
