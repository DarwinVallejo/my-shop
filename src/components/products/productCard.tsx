import useCart from "@/hooks/useCart";
import { ProductEntity } from "@/modules/entities/product";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";

type ProductCardProps = ProductEntity;

const ProductCard = (product: ProductCardProps) => {
  const { t } = useTranslation("common");
  const { addToCart } = useCart();

  return (
    <div className="container flex flex-col mx-auto p-4 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative">
        <div className=" flex justify-center pt-8 w-full object-cover h-64 center">
          <Image
            height={300}
            width={180}
            src={product.image}
            quality={75}
            alt={product.name}
          />
        </div>
      </div>
      <div className="px-2 py-4 flex-1 flex flex-col justify-between">
        <h1 className="text-lg font-medium mb-2">{product.name}</h1>
        <div>
          <p className="text-xl text-gray-800 font-bold mb-2">
            ${product.price}
          </p>
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            {t("addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
