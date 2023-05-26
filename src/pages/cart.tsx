import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/common/layout";
import useCart from "@/hooks/useCart";
import { EmptyCart } from "@/components/cart/emptyCart";
import { ProductCartList } from "@/components/cart/productCartList";
import { AiOutlineClear } from "react-icons/ai";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default function Cart() {
  const { t } = useTranslation("common");
  const { cart, clear } = useCart();
  const total = cart.items.reduce(
    (prev, current) => prev + current.product.price * current.quantity,
    0
  );
  if (cart.items.length == 0) {
    return <EmptyCart />;
  }
  return (
    <Layout>
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start">
          <ProductCartList items={cart.items} />
          <div className="flex flex-col w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-xl px-12 py-4">
              <div>
                <div className="flex justify-between  py-4">
                  <h3 className="font-medium text-md">{t("products")}</h3>
                  <h3 className="font-bold text-sm">{cart.items.length}</h3>
                </div>
              </div>
              <span className="block h-0.5 w-full bg-gray-200"></span>
              <div>
                <div className="flex justify-between  py-4">
                  <h3 className="font-medium text-md">{t("total")}</h3>
                  <h3 className="font-bold text-sm">$ {total.toFixed(2)}</h3>
                </div>
              </div>
            </div>
            <button
              data-testid="clearCart"
              className="flex flex-row p-4 justify-center font-semibold hover:text-red-500 text-gray-500 text-lg mt48"
              onClick={() => clear()}
            >
              <h3 className="font-semibold text-sm w-auto">{t("clearCart")}</h3>
              <AiOutlineClear />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
