"use client"

import {FC} from 'react';
import {Product} from "@/components/simple/product/Product";

import {useGetAllCameras} from "@/queries/cameras.query";
import {ICamera} from "@/types/camera.types";

import s from "./products.module.css";

export const Products: FC = () => {
  const {data} = useGetAllCameras();

  return (
    <main className={s.products}>
      {data?.map((item: ICamera) => (
        <Product
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          category={item.category}
          price={item.price}
          isInCart={item.isInCart}
        />
      ))}
    </main>
  );
};
