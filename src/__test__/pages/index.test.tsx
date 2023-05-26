import { useTranslation } from "next-i18next";
import { Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/pages";

vi.mock("next-i18next", () => ({
  useTranslation: vi.fn().mockReturnValue({ t: vi.fn() }),
}));

vi.mock("@/modules/services/productService", () => ({
  getProducts: vi.fn().mockResolvedValue([]),
}));

describe("Home", () => {
  beforeEach(() => {
    vi.mock("next/router", () => require("next-router-mock"));
    vi.clearAllMocks();
  });

  it("renders with welcome title", () => {
    const useTranslationSpy = useTranslation as Mock;
    const tSpy = vi.fn((str) => str);
    useTranslationSpy.mockReturnValue({
      t: tSpy,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    });

    const { getByText } = render(<Home products={[]} />);
    const welcomeTitle = getByText("welcomeTitle"); // Replace with the actual translation key

    expect(welcomeTitle).toBeDefined();
  });
});
