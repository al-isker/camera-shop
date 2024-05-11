import {FC} from 'react';
import {ButtonAdd} from "@/components/ui/button-add/ButtonAdd";
import {ButtonToCart} from "@/components/ui/button-to-cart/ButtonToCart";
import {ICamera} from "@/types/camera.types";

import s from "./product.module.css";
import Link from "next/link";
import {routes} from "@/config/routes";

export const Product:FC<ICamera> = ({id, img, name, category, resolution, price, isInCart}) => {
  return (
    <Link href={`${routes.products}/${id}`} className={s.product}>
      <div className={s.img} style={{backgroundImage: `url("${img}")`}}></div>
      <div className={s.name}>{name}</div>
      {category && (
        <div className={s.info}>вид: {category}</div>
      )}
      {resolution && (
        <div className={s.info}>разрешение: <span>{resolution}</span></div>
      )}
      <div className={s.price_button}>
        <div className={s.price}>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0
          }).format(price)}
        </div>
        {/*если что, размеры увеличь*/}
        {isInCart ? (
          <ButtonToCart />
        ) : (
          <ButtonAdd id={id} />
        )}
      </div>
    </Link>
  );
};