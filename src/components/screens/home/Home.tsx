import {FC} from 'react';
import {Main} from "@/components/ordinary/main/Main";
import {CategoriesSection} from "@/components/ordinary/categories-section/CategoriesSection";
import {ProductsSection} from "@/components/ordinary/products-section/ProductsSection";

export const Home:FC = () => {
  return (
    <Main>
      <CategoriesSection />
      <ProductsSection />
    </Main>
  );
};

