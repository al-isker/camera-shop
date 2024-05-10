"use client"
import {FC} from 'react';
import {useParams} from "next/navigation";

export const ProductItem:FC = () => {
  const {slug} = useParams();

  return (
    <main>
      {slug} продукт
    </main>
  );
};
