import useCart from "@/hooks/useCart";
import Cart from "@/pages/cart";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { vi, describe, it, beforeEach, Mock, expect } from "vitest";

vi.mock("next-i18next", () => ({
  useTranslation: vi.fn().mockReturnValue({ t: vi.fn() }),
}));

vi.mock("@/hooks/useCart", () => ({
  __esModule: true,
  default: vi.fn(), // Mock the default export of useCart
  useCart: vi.fn(), // Use the actual implementation for other functions
}));

describe("Cart", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("next/router", () => require("next-router-mock"));
  });

  it("renders empty cart when there are no items", () => {
    (useTranslation as Mock).mockReturnValue({ t: vi.fn((str) => str) });
    (useCart as Mock).mockReturnValue({ cart: { items: [] }, clear: vi.fn() });
    const { getByText } = render(<Cart />);

    const emptyCartText = getByText("emptyCart");

    expect(emptyCartText).toBeDefined();
  });

  it("renders cart with total when there are items", () => {
    const cartItems = [
      { product: { price: 10 }, quantity: 2 },
      { product: { price: 5 }, quantity: 1 },
    ];
    const total = 25;

    (useCart as Mock).mockReturnValue({
      cart: { items: cartItems },
      clear: vi.fn(),
    });

    render(<Cart />);

    const totalText = screen.getByText(`$ ${total.toFixed(2)}`); // Replace with the actual translation key

    expect(totalText).toBeDefined();
  });

  it("calls clear function when clear button is clicked", () => {
    const cartItems = [
      { product: { price: 10 }, quantity: 2 },
      { product: { price: 5 }, quantity: 1 },
    ];
    const clearFunction = vi.fn();

    (useCart as Mock).mockReturnValue({
      cart: { items: cartItems },
      clear: clearFunction,
    });

    render(<Cart />);

    const clearButton = screen.getByTestId("clearCart"); // Replace with the actual translation key

    fireEvent.click(clearButton);

    expect(clearFunction).toHaveBeenCalled();
  });
});
