"use client"

import {FC, ChangeEvent, useState} from 'react';
import {Main} from "@/components/ordinary/main/Main";
import {Product} from "@/components/simple/product/Product";
import {Pagination} from "@mui/material";

import {useGetAllCameras} from "@/queries/cameras.query";
import {ICamera} from "@/types/camera.types";

import s from "./products.module.css";

const NUMBER_PRODUCTS = 8;

export const Products: FC = () => {
  const [page, setPage] = useState(1);

  const {data} = useGetAllCameras();

  const handlePageClick = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <Main>
      <div className={s.products}>
        <div className={s.products_list}>
          {data
            ?.slice((page - 1) * NUMBER_PRODUCTS, page * NUMBER_PRODUCTS)
            .map((item: ICamera, i: number) => (
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
