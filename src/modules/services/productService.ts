import { ProductEntity } from "../entities/product";

export const getProducts = async (): Promise<ProductEntity[]> => {
  const res = await fetch(
    "https://ornate-scone-f87809.netlify.app/api/products.json"
  );
  const repo: { data?: ProductEntity[] } = await res.json();
  return repo.data ?? [];
};
