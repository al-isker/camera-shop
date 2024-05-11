import {FC, useCallback, useEffect} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useAddCartCameras} from "@/queries/cameras.query";
import Image from "next/image";

import add from './assets/add.svg'
import s from "./button-add.module.css";

interface Props {
  id: string
}

export const ButtonAdd:FC<Props> = ({id}) => {
  const {mutate, isPending, isSuccess} = useAddCartCameras();
  const queryClient = useQueryClient();

  const handleClick = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
    mutate(id);
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
    >
      <Image className={s.img} src={add} alt="add" />
    </button>
  );
};