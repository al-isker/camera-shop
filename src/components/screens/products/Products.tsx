"use client"

import {FC} from 'react';
import {Main} from "@/components/ordinary/main/Main";
import {Product} from "@/components/simple/product/Product";

import {useGetAllCameras} from "@/queries/cameras.query";
import {ICamera} from "@/types/camera.types";

import s from "./products.module.css";

export const Products: FC = () => {
  const {data} = useGetAllCameras();

  return (
    <Main>
      <div className={s.products}>
        {data?.map((item: ICamera, i: number) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            category={item.category}
            price={item.price}
            isInCart={item.isInCart}
            delay={i / 20}
          />
        ))}
      </div>
    </Main>
  );
};
