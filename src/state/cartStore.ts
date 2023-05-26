import { CartEntity } from "@/modules/entities/cart";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartEntity;
  setCart: (cart: CartEntity) => void;
}

const options = {
  name: "cart",
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: {
        items: [],
      },
      setCart: (cart: CartEntity): void =>
        set((state: CartState) => ({
          ...state,
          cart,
        })),
    }),
    options
  )
);
