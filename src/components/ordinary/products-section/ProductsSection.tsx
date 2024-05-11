"use client"

import {FC} from "react";
import {Product} from "@/components/simple/product/Product";
import {useGetAllCameras} from "@/queries/cameras.query";
import {ICamera} from "@/types/camera.types";

import s from "@/components/ordinary/products-section/products-section.module.css";

export const ProductsSection:FC = () => {
  const {data} = useGetAllCameras();

  return (
    <section className={s.products_wrap}>
      <div className={s.products}>
        <h2 className={s.title}>Товары</h2>
        <div className={s.products_list}>
          {data?.slice(0, 4).map((item: ICamera) => (
             <Product
               key={item.id}
               id={item.id}
               img={item.img}
               name={item.name}
               resolution={item.resolution}
               price={item.price}
               isInCart={item.isInCart}
             />
          ))}
        </div>
      </div>
    </section>
  );
};
