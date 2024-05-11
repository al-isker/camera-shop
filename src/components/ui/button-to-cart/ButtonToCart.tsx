import React from 'react';
import Link from "next/link";
import {routes} from "@/config/routes";

import s from "./button-to-cart.module.css";

export const ButtonToCart = () => {
  return (
    <Link
      className={s.button}
      href={routes.cart}
    >
      в корзине
    </Link>
  );
};
