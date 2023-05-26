import { CartEntity } from "@/modules/entities/cart";
import { ProductEntity } from "@/modules/entities/product";
import { ProductCart } from "@/modules/entities/productCart";
import { useCartStore } from "@/state/cartStore";
import { useTranslation } from "next-i18next";
import toast from "react-hot-toast";

type UseCart = {
  cart: CartEntity;
  addToCart: (product: ProductEntity) => void;
  removeFromCart: (productCart: ProductCart) => void;
  increment: (productCart: ProductCart) => void;
  decrement: (productCart: ProductCart) => void;
  clear: () => void;
};

const useCart = (): UseCart => {
  const { cart, setCart } = useCartStore();
  const { t } = useTranslation("common");

  const getProductCartIndex = (product: ProductEntity) => {
    const cartProductIndex = cart.items.findIndex(
      (cartProduct) => cartProduct.product.id === product.id
    );
    return cartProductIndex;
  };

  const addToCart = (product: ProductEntity) => {
    const cartProducts = [...cart.items];
    const cartProductIndex = getProductCartIndex(product);

    if (cartProductIndex >= 0) {
      cartProducts[cartProductIndex].quantity++;
    } else {
      cartProducts.push({ product, quantity: 1 });
    }
    setCart({ items: [...cartProducts] });
    toast.success(t("productAdded"));
  };

  const removeFromCart = (productCart: ProductCart) => {
    let cartProducts = [...cart.items];
    cartProducts = cartProducts.filter(
      (cartProduct) => cartProduct.product.id !== productCart.product.id
    );

    setCart({ items: [...cartProducts] });
  };

  const increment = (productCart: ProductCart) => {
    let cartProducts = [...cart.items];
    const cartProductIndex = getProductCartIndex(productCart.product);
    cartProducts[cartProductIndex].quantity++;

    setCart({ items: [...cartProducts] });
  };

  const decrement = (productCart: ProductCart) => {
    let cartProducts = [...cart.items];
    const cartProductIndex = getProductCartIndex(productCart.product);
    if (productCart.quantity > 1) {
      cartProducts[cartProductIndex].quantity--;
    } else {
      cartProducts = cartProducts.filter(
        (cartProduct) => cartProduct.product.id !== productCart.product.id
      );
    }

    setCart({ items: [...cartProducts] });
  };

  const clear = () => {
    setCart({ items: [] });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    clear,
  };
};

export default useCart;
