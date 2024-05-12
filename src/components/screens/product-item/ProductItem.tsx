"use client"
import {FC} from 'react';
import {useParams} from "next/navigation";
import {ButtonDelete} from "@/components/ui/button-delete/ButtonDelete";
import {useGetByIdCameras} from "@/queries/cameras.query";

import s from "./product-item.module.css";
import {ButtonAdd} from "@/components/ui/button-add/ButtonAdd";

export const ProductItem:FC = () => {
  const {slug} = useParams();

  // @ts-ignore
  const {data} = useGetByIdCameras(slug);

  return (
    data && (
      <main className={s.product_item}>
        <div className={s.top}>
          <div className={s.img} style={{backgroundImage: `url("${data.img}")`}}></div>
          <div className={s.info}>
            <div className={s.name}>{data.name}</div>
            <div className={s.category}>категория: <span>{data.category?.toLowerCase()}</span></div>
            <div className={s.resolution}>разрешение: <span>{data.resolution}</span></div>

            <div className={s.price_button}>
              <div className={s.price}>
                {new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 0
                }).format(data.price)}
              </div>
              {data.isInCart ? (
                <ButtonDelete
                  style={{
                    width: 200,
                    height: 35
                  }}
                  id={data.id}
                />
              ) : (
                <ButtonAdd
                  style={{
                    width: 200,
                    height: 35
                  }}
                  id={data.id}
                />
              )}
            </div>
          </div>
        </div>

        <div className={s.description}>
          <div className={s.description_title}>Описание:</div>
          {data.description}
        </div>
      </main>
    )
  );
};
