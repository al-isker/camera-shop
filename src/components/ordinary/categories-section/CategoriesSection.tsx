import {FC} from "react";
import Link from "next/link";
import {routes} from "@/config/routes";

import reflex from "./assets/reflex.jpg";
import mirrorless from "./assets/mirrorless.webp";
import compact from "./assets/compact.jpg";

import s from "./categories-section.module.css";

export const CategoriesSection:FC = () => {
  return (
    <section className={s.categories_wrap}>
      <div className={s.categories}>
        <h2 className={s.title}>Категории</h2>
        <div className={s.category_list}>
          <CategoryItem
            src={reflex.src}
            title="Зеркальные"
            description="фотоаппарат, видоискатель которого содержит зеркало, расположенное за объективом под углом 45°"
            href={routes.reflex}
          />
          <CategoryItem
            src={mirrorless.src}
            title="Беззеркальные"
            description="фотоаппарат без оптического видоискателя, вместо которого используется электронный визор"
            href={routes.mirrorless}
          />
          <CategoryItem
            src={compact.src}
            title="Компактные"
            description="фотоаппарат с несменным жёстковстроенным объективом, как правило, небольшого веса и малых габаритов"
            href={routes.compact}
          />
        </div>
      </div>
    </section>
  );
};


interface CategoryItemProps {
  src: string;
  title: string
  description: string
  href: string
}

const CategoryItem: FC<CategoryItemProps> = ({src, title, description, href}) => {
  return (
    <Link href={href} className={s.category_item}>
      <div className={s.category_info}>
        <div className={s.category_title}>{title}</div>
        <div className={s.category_description}>{description}</div>
      </div>
      <img className={s.category_img} src={src} alt="img"/>
    </Link>
  );
}