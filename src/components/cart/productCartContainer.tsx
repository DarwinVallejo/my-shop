import useCart from "@/hooks/useCart";
import { ProductCart } from "@/modules/entities/productCart";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";

type ProductCartContainerProps = {
  productCart: ProductCart;
};

const ProductCartContainer = ({ productCart }: ProductCartContainerProps) => {
  const { t } = useTranslation("common");
  const { image, name, price } = productCart.product;
  const { increment, decrement, removeFromCart } = useCart();
  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-row items-start w-full">
          <Image width={80} height={80} src={image} alt="" />
          <div className="flex-1 flex flex-col justify-between lg:flex-row">
            <div className="ml-2 flex flex-row lg:flex-col lg:ml-8">
              <h3 className="font-semibold text-sm w-auto">{name}</h3>
              <button
                className="font-semibold hover:text-red-500 text-gray-500 text-lg mt48"
                onClick={() => removeFromCart(productCart)}
              >
                <AiOutlineDelete />
              </button>
            </div>

            <div className="flex flex-row justify-between ml-2 mt-2 lg:justify-center lg:mt-0 lg:ml-8">
              <div className="flex flex-col">
                <span className="font-medium">{t("price")}</span>${price}
              </div>
              <div className="ml-8">
                <span className="font-medium text-right">{t("quantity")}</span>
                <div className="flex flex-row items-center">
                  <button
                    className="text-xl lg:text-lg"
                    onClick={() => decrement(productCart)}
                  >
                    <AiOutlineLine />
                  </button>
                  <p className="text-xl text-gray-800 font-medium mx-2 lg:text-lg">
                    {productCart.quantity}
                  </p>
                  <button
                    className="text-xl lg:text-lg"
                    onClick={() => increment(productCart)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-8 flex flex-col items-center invisible lg:visible">
          <span className="font-medium">{t("subtotal")}</span>$
          {(price * productCart.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCartContainer;
