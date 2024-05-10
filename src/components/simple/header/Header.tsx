"use client"

import {FC, ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {routes} from "@/config/routes";
import logo from './assets/logo.jpg';
import cart from './assets/cart.svg';
import s from './header.module.css';
import classNames from "classnames";

export const Header:FC = ({}) => {
  const pathname = usePathname();

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

      <div className={s.cart}>
        <span className={s.cart_count}>{6}</span>
        <Image className={s.cart_img} src={cart} alt="cart"/>
      </div>
    </header>
  );
};