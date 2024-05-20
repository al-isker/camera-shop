import {FC} from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {ButtonAdd} from "@/components/ui/button-add/ButtonAdd";
import {ButtonChange} from "@/components/ui/button-change/ButtonChange";

import {ICamera} from "@/types/camera.types";
import {routes} from "@/config/routes";
import s from "./product.module.css";


export const Product:FC<ICamera> = ({id, img, name, category, resolution, price, quantityInCart, delay}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: delay ?? 0}}
      className={s.motion}
    >
      <Link href={`${routes.products}/${id}`} className={s.product}>
        <div className={s.img} style={{backgroundImage: `url("${img}")`}}></div>
        <div className={s.name}>{name}</div>
        {category && (
          <div className={s.info}>категория: <span>{category.toLowerCase()}</span></div>
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
          {quantityInCart === 0 ? (
            <ButtonAdd id={id} />
          ) : (
            <ButtonChange id={id} quantity={quantityInCart} />
          )}
        </div>
      </Link>
    </motion.div>
  );
};
