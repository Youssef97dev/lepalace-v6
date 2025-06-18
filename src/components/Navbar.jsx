"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaImage } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMdRestaurant } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoBookmarks } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full flex justify-between items-center px-4 py-2 bg-secondary_50 rounded-full">
        <Link href="#restaurant" className="w-full">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <IoMdRestaurant size={20} />
            <span className="text-[12px] font-light">
              {t("navbar.restaurant")}
            </span>
          </div>
        </Link>
        <Link href="/menu" className="w-full">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <BiSolidFoodMenu size={20} />
            <span className="text-[12px] font-light">{t("navbar.menu")}</span>
          </div>
        </Link>
        <Link href="/booking" className="w-full">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <IoBookmarks size={20} />
            <span className="text-[12px] font-light">{t("navbar.book")}</span>
          </div>
        </Link>
        <Link href="/gallery" className="w-full">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <FaImage size={20} />
            <span className="text-[12px] font-light">
              {t("navbar.gallery")}
            </span>
          </div>
        </Link>
        <Link href="/contact" className="w-full">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <RiMessage2Fill size={20} />
            <span className="text-[12px] font-light">{`Contact`}</span>
          </div>
        </Link>
      </div>
    )
  );
};

export default Navbar;
