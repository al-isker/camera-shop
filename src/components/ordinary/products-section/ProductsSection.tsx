"use client"

import {FC, useMemo, useState} from "react";
import {Product} from "@/components/simple/product/Product";
import {AnimateTabs} from "@/components/simple/animate-tabs/AnimateTabs";

import {useGetAllCameras} from "@/queries/cameras.query";
import {ICamera} from "@/types/camera.types";
import {resolutions} from "@/config/cameras.data";

import s from "@/components/ordinary/products-section/products-section.module.css";

export const ProductsSection:FC = () => {
  const {data} = useGetAllCameras();

  const [activeResolution, setActiveResolution] = useState(resolutions[0]);

  const resultData = useMemo(() => {
    return data?.filter((item: ICamera) => item.resolution === activeResolution);
  }, [data, activeResolution]);

  return (
    <section className={s.products_wrap}>
      <div className={s.products}>
        <h2 className={s.title}>Товары</h2>
        <AnimateTabs
          options={resolutions}
          active={activeResolution}
          setActive={setActiveResolution}
        />
        <div className={s.products_list}>
          {resultData?.slice(0, 4).map((item: ICamera) => (
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
        </div>
      </div>
    </section>
  );
};