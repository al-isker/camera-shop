import {FC} from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {ButtonChange} from "@/components/ui/button-change/ButtonChange";

import {routes} from "@/config/routes";
import {ICamera} from "@/types/camera.types";

import s from "./cart-product.module.css";

export const CartProduct:FC<ICamera> = ({id, img, name, category, resolution, price, quantityInCart, delay}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: delay ?? 0}}
      className={s.motion}
    >
      <Link href={`${routes.products}/${id}`} className={s.cart_product}>
        <div className={s.img} style={{backgroundImage: `url("${img}")`}}></div>
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.category}>категория: <span>{category?.toLowerCase()}</span></div>
          <div className={s.resolution}>разрешение: <span>{resolution}</span></div>
        </div>
        <div className={s.price_button}>
          <div className={s.price}>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
              minimumFractionDigits: 0
            }).format(price)}
          </div>
          <ButtonChange id={id} quantity={quantityInCart} />
        </div>
      </Link>
    </motion.div>
  );
};
