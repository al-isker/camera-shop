"use client"

import {FC, useMemo} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {routes} from "@/config/routes";
import {useGetAllCameras} from "@/queries/cameras.query";

import logo from './assets/logo.jpg';
import cart from './assets/cart.svg';
import s from './header.module.css';

export const Header: FC = ({}) => {
  const pathname = usePathname();

  const {data} = useGetAllCameras();

  const cartCount = useMemo(() => {
    if (data) {
      return data.filter((item: {isInCart: boolean}) => item.isInCart).length;
    }
  }, [data]);

  return (
    <header className={s.header}>
      <Image className={s.logo} src={logo} alt="logo"/>

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

      <Cart count={cartCount} />
    </header>
  );
};


interface CartProps {
  count: number
}

const Cart:FC<CartProps> = ({count}) => {
  return (
    <Link href={routes.cart} className={s.cart}>
      {count > 0 && (
        <span className={s.cart_count}>{count}</span>
      )}
      <Image className={s.cart_img} src={cart} alt="cart"/>
    </Link>
  )
}