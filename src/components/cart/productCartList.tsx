import { ProductCart } from "@/modules/entities/productCart";
import React from "react";
import ProductCartContainer from "./productCartContainer";

type ProductCartListProps = {
  items: ProductCart[];
};

export const ProductCartList = ({ items }: ProductCartListProps) => {
  return (
    <div className="divide-y divide-inherit">
      {items.map((productCart) => (
        <ProductCartContainer
          key={productCart.product.id}
          productCart={productCart}
        />
      ))}
    </div>
  );
};
