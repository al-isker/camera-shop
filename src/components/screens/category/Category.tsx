"use client"

import {ChangeEvent, FC, useState} from 'react';
import {useParams} from "next/navigation";
import {Main} from "@/components/ordinary/main/Main";
import {Product} from "@/components/simple/product/Product";
import {Pagination} from "@mui/material";

import {useGetByParams} from "@/queries/cameras.query";
import {categoryMap, categoryMapTitle} from "@/config/cameras.data";
import {ICamera} from "@/types/camera.types";

import s from "./category.module.css";
import {Loading} from "@/components/ui/loading/Loading";

const NUMBER_PRODUCTS = 8;

export const Category: FC = () => {
  const [page, setPage] = useState(1);
  const {slug} = useParams();

  // @ts-ignore
  const targetCategory: string = categoryMap[slug];

  const {data, isPending} = useGetByParams('category', targetCategory);

  const handlePageClick = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  // @ts-ignore
  const categoryTitle: string = categoryMapTitle[slug]

  return (
    <Main>
      <Loading isVisible={isPending} />
      <div className={s.category}>
        <h2 className={s.category_title}>{categoryTitle}</h2>

        <div className={s.category_list}>
          {data
            ?.slice((page - 1) * NUMBER_PRODUCTS, page * NUMBER_PRODUCTS)
            .map((item: ICamera, i: number) => (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              resolution={item.resolution}
              price={item.price}
              quantityInCart={item.quantityInCart}
              delay={i / 20}
            />
          ))}
        </div>

        {data && (
          <Pagination
            className={s.pagination}
            page={page}
            onChange={handlePageClick}
            count={Math.ceil(data?.length / NUMBER_PRODUCTS)}
            shape="rounded"
          />
        )}
      </div>
    </Main>
  );
};
