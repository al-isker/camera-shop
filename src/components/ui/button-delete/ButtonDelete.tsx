import {FC, useCallback, useEffect} from 'react';
import Image from "next/image";

import deleteImg from "./assets/delete.svg";
import s from "./button-delete.module.css";
import {useDeleteCartCameras} from "@/queries/cameras.query";
import {useQueryClient} from "@tanstack/react-query";

interface Props {
  id: string;
}

export const ButtonDelete:FC<Props> = ({id}) => {
  const {mutate, isPending, isSuccess} = useDeleteCartCameras()
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
      <Image className={s.img} src={deleteImg} alt="delete" />
    </button>
  );
};
