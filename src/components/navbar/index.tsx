import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiTranslate } from "react-icons/hi";

import Image from "next/image";
import MeruLogo from "../../../public/meru_logo.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

AiOutlineMenu;

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const changeTo = router.locale === "es" ? "en" : "es";

  return (
    <nav className="w-full bg-teal-600 shadow fixed z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href={"/"}>
              <Image
                className="object-cover"
                height={200}
                width={100}
                quality={50}
                src={MeruLogo}
                alt={"Meru Logo"}
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose color="white" />
                ) : (
                  <AiOutlineMenu color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link
                href="/cart"
                className="text-white hover:text-indigo-200 flex items-center space-x-3"
              >
                <span>{t("cart")}</span>
                <AiOutlineShoppingCart />
              </Link>
            </div>
            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link
                href={router.route}
                className="relative text-white hover:text-indigo-200 flex items-center space-x-1"
                locale={changeTo}
              >
                <HiTranslate />
                <button>{changeTo}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="flex flex-row space-x-6">
            <Link
              href="/cart"
              className="relative text-white hover:text-indigo-200 flex items-center space-x-3"
            >
              <span>{t("cart")}</span>
              <AiOutlineShoppingCart />
            </Link>
            <Link
              href={router.route}
              className="relative text-white hover:text-indigo-200 flex items-center space-x-1"
              locale={changeTo}
            >
              <HiTranslate />
              <button>{changeTo}</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
