import { useTranslation } from "next-i18next";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getProducts } from "@/modules/services/productService";
import Layout from "@/components/common/layout";
import ProductList, {
  ProductListProps,
} from "@/components/products/productList";

type HomeProps = ProductListProps;

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}) => {
  const products = await getProducts();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      products,
    },
  };
};

export default function Home({
  products,
}: InferGetServerSidePropsType<GetServerSideProps<HomeProps>>) {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl flex items-center">
            <div className="border t-4 border-gray-400 w-32 h-0 mr-2" />
            <p className="text-center text-gray-500 text-lg md:text-2xl">
              {t("welcomeTitle")}
            </p>
            <div className="border t-4 border-gray-400 w-32 h-0 ml-2" />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
