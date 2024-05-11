"use client"

import {FC, useMemo} from 'react';
import {useGetAllCameras} from "@/queries/cameras.query";
import {CartProduct} from "@/components/simple/cart-product/CartProduct";

import {ICamera} from "@/types/camera.types";
import s from "./cart.module.css";

export const Cart: FC = () => {
  const {data} = useGetAllCameras();

  const resultData = useMemo(() => {
    return data?.filter((item: ICamera) => item.isInCart);
  }, [data]);

  const total = useMemo(() => {
    return resultData.reduce((acc: number, item: ICamera) => {
      return acc + item.price;
    }, 0);
  }, [resultData]);

  return (
    <main className={s.cart}>
      <h2 className={s.cart_title}>Корзина</h2>

      <div className={s.cart_list}>
        {resultData?.map((item: ICamera, i: number) => (
          <CartProduct
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            category={item.category}
            resolution={item.resolution}
            price={item.price}
            isInCart={item.isInCart}
            delay={i / 5}
          />
        ))}
      </div>

      <div className={s.total}>
        <span>Итого: </span>
        <span className={s.total_price}>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0
          }).format(total)}
        </span>
      </div>
    </main>
  );
};
