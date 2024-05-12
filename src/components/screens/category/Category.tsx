"use client"

import {FC, useMemo} from 'react';
import {useParams} from "next/navigation";
import {Main} from "@/components/ordinary/main/Main";
import {Product} from "@/components/simple/product/Product";

import {useGetAllCameras} from "@/queries/cameras.query";
import {categoryMap, categoryMapTitle} from "@/config/cameras.data";
import {ICamera} from "@/types/camera.types";

import s from "./category.module.css";

export const Category: FC = () => {
  const {slug} = useParams();
  const {data} = useGetAllCameras();

  // @ts-ignore
  const targetCategory: string = categoryMap[slug];
  // @ts-ignore
  const categoryTitle: string = categoryMapTitle[slug]

  const resultData = useMemo(() => {
    return data?.filter((item: ICamera) => item.category === targetCategory);
  }, [data]);

  return (
    <Main>
      <div className={s.category}>
        <h2 className={s.category_title}>{categoryTitle}</h2>

        <div className={s.category_list}>
          {resultData?.map((item: ICamera, i: number) => (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              resolution={item.resolution}
              price={item.price}
              isInCart={item.isInCart}
              delay={i / 20}
            />
          ))}
        </div>
      </div>
    </Main>
  );
};
