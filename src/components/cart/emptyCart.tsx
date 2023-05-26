import React from "react";
import Layout from "../common/layout";
import { useTranslation } from "next-i18next";

export const EmptyCart = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className="h-full">
        <div className="px-10 py-10 w-full">
          <div className="flex justify-center border-b pb-3">
            <h2 className="font-semibold text-2xl">{t("emptyCart")}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};
