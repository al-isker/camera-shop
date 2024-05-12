import {FC, ReactNode} from 'react';

import s from "./main.module.css";

interface Props {
  children: ReactNode;
}

export const Main:FC<Props> = ({children}) => {
  return (
    <main className={s.container}>
      {children}
    </main>
  );
};
