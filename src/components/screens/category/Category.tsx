"use client"

import {FC, useMemo} from 'react';
import {useParams} from "next/navigation";
import {Product} from "@/components/simple/product/Product";

import {useGetAllCameras} from "@/queries/cameras.query";
import {categoryMap, categoryMapTitle} from "@/config/cameras.data";
import {ICamera} from "@/types/camera.types";

import s from "./category.module.css";

export const Category: FC = () => {
  const {slug} = useParams();
  const {data} = useGetAllCameras();

  const targetCategory: string = categoryMap[slug];

  const resultData = useMemo(() => {
    return data?.filter((item: ICamera) => item.category === targetCategory);
  }, [data]);

  return (
    <main className={s.category}>
      <h2 className={s.category_title}>{categoryMapTitle[slug]}</h2>

      <div className={s.category_list}>
        {resultData?.map((item: ICamera) => (
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
    </main>
  );
};
