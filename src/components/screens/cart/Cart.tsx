"use client"

import {FC, useMemo} from 'react';
import Link from "next/link";

import {Main} from "@/components/ordinary/main/Main";
import {CartProduct} from "@/components/simple/cart-product/CartProduct";

import {useGetAllCameras, useGetByParams} from "@/queries/cameras.query";
import {routes} from "@/config/routes";
import {ICamera} from "@/types/camera.types";
import s from "./cart.module.css";


export const Cart:FC = () => {
  const {data} = useGetByParams('isInCart', "true");

  const total = useMemo(() => {
    return data?.reduce((acc: number, item: ICamera) => {
      return acc + item.price;
    }, 0);
  }, [data]);

  if(data?.length === 0) {
    return <EmptyCart />
  }

  return (
    <Main>
      <div className={s.cart}>
        <h2 className={s.cart_title}>Корзина</h2>

        <div className={s.cart_list}>
          {data?.map((item: ICamera, i: number) => (
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
      </div>
    </Main>
  );
};


const EmptyCart: FC = () => {
  return (
    <Main>
      <div className={s.cart}>
        <h2 className={s.cart_title}>Корзина</h2>

        <div className={s.empty}>
          <div className={s.empty_message}>Тут пока пусто...</div>
          <Link className={s.link} href={routes.products}>исправим?</Link>
        </div>
      </div>
    </Main>
  )
}
