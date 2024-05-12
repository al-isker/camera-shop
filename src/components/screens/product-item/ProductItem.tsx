"use client"
import {FC} from 'react';
import {useParams} from "next/navigation";

import {Main} from "@/components/ordinary/main/Main";
import {ButtonDelete} from "@/components/ui/button-delete/ButtonDelete";
import {ButtonAdd} from "@/components/ui/button-add/ButtonAdd";
import {useGetByIdCameras} from "@/queries/cameras.query";

import s from "./product-item.module.css";
import {Loading} from "@/components/ui/loading/Loading";

export const ProductItem:FC = () => {
  const {slug} = useParams();

  // @ts-ignore
  const {data, isPending} = useGetByIdCameras(slug);

  return (
    <Main>
      <Loading isVisible={isPending} />
      {data && (
        <div className={s.product_item}>
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
        </div>
      )}
    </Main>
  );
};
