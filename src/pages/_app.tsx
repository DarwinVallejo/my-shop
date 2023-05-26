import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
