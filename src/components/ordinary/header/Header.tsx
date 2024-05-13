"use client"

import {FC, useMemo} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {ICamera} from "@/types/camera.types";
import {routes} from "@/config/routes";
import {useGetAllCameras} from "@/queries/cameras.query";

import logo from './assets/logo.jpg';
import cart from './assets/cart.svg';
import s from './header.module.css';

export const Header: FC = ({}) => {
  const pathname = usePathname();

  return (
    <header className={s.header_wrap}>
      <div className={s.header}>
        <Link href={routes.home} className={s.logo}>
          <Image className={s.logo_img} src={logo} alt="logo"/>
          <div className={s.logo_title}>Camera Shop</div>
        </Link>

        <nav className={s.navbar}>
          <Link
            href={routes.home}
            className={pathname === routes.home ? s.navbar_item_active : s.navbar_item}
          >
            Главная
          </Link>

          <Link
            href={routes.products}
            className={pathname.includes(routes.products) ? s.navbar_item_active : s.navbar_item}
          >
            Товары
          </Link>
        </nav>

        <BtnCart />
      </div>
    </header>
  );
};



const BtnCart: FC = () => {
  const {data} = useGetAllCameras();

  const count = useMemo(() => {
    if (data) {
      return data.filter((item: ICamera) => item.isInCart).length;
    }
  }, [data]);

  return (
    <Link href={routes.cart} className={s.cart}>
      {count > 0 && (
        <span className={s.cart_count}>{count}</span>
      )}
      <Image className={s.cart_img} src={cart} alt="cart"/>
    </Link>
  )
}