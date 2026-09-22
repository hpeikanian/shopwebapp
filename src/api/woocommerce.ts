const STORE_API = "https://www.poodinwear.ir/wp-json/wc/store/v1";

export type StoreProduct = {
  id: number;
  name: string;
  price: string;
  images: { src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  variations?: number[];
};

export async function getProducts(params: Record<string,string> = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${STORE_API}/products${query ? `?${query}` : ""}`);
  if (!response.ok) throw new Error("WooCommerce products request failed");
  return response.json() as Promise<StoreProduct[]>;
}

export async function getProduct(id: number) {
  const response = await fetch(`${STORE_API}/products/${id}`);
  if (!response.ok) throw new Error("WooCommerce product request failed");
  return response.json() as Promise<StoreProduct>;
}
