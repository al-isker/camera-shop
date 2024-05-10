import {FC} from 'react';
import {CategoriesSection} from "@/components/simple/categories-section/CategoriesSection";
import {ProductsSection} from "@/components/simple/products-section/ProductsSection";

export const Home: FC = () => {
  return (
    <main>
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
};

