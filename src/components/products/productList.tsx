import { ProductEntity } from "@/modules/entities/product";
import React from "react";
import ProductCard from "./productCard";

export type ProductListProps = {
  products: ProductEntity[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
