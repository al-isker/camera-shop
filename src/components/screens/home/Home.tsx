import {FC} from 'react';
import {CategoriesSection} from "@/components/ordinary/categories-section/CategoriesSection";
import {ProductsSection} from "@/components/ordinary/products-section/ProductsSection";

export const Home: FC = () => {
  return (
    <main>
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
};

