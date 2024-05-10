import {FC} from 'react';
import {useParams} from "next/navigation";

export const Category:FC = () => {
  const {category} = useParams()

  return (
    <main>
      Категория: {category}
    </main>
  );
};
