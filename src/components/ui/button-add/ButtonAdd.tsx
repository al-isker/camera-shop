import {FC, useCallback, useEffect} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useChangeQuantityInCartCameras} from "@/queries/cameras.query";
import Image from "next/image";

import add from './assets/add.svg'
import s from "./button-add.module.css";

interface Props {
  style?: object
  id: string
}

export const ButtonAdd:FC<Props> = ({style, id}) => {
  const {mutate, isPending, isSuccess} = useChangeQuantityInCartCameras();
  const queryClient = useQueryClient();

  const handleClick = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
    mutate({id: id, value: 1});
  }, []);

  useEffect(() => {
    if(isSuccess) {
      queryClient.invalidateQueries(
        {queryKey: ['cameras']}
      ).then();
    }
  }, [isSuccess]);

  return (
    <button
      className={s.button}
      type="button"
      onClick={handleClick}
      disabled={isPending}
      style={style}
    >
      <Image className={s.img} src={add} alt="add" />
    </button>
  );
};
