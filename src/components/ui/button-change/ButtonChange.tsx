import {ChangeEvent, MouseEvent, FC, useCallback, useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";

import {useChangeQuantityInCartCameras} from "@/queries/cameras.query";

import s from './button-change.module.css';

interface Props {
  id: string,
  quantity: number,
  style?: object
}

export const ButtonChange:FC<Props> = ({id, quantity, style}) => {
  const [value, setValue] = useState(Number(quantity));
  const queryClient = useQueryClient();

  const {mutate, isPending, isSuccess} = useChangeQuantityInCartCameras();

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    mutate({id: id, value: newValue});
  }, [value]);

  const handleMinusClick = useCallback(() => {
    const newValue = Number(value) - 1;
    setValue(newValue);
    mutate({id: id, value: newValue});
  }, [value]);

  const handlePlusClick = useCallback(() => {
    const newValue = Number(value) + 1;
    setValue(newValue);
    mutate({id: id, value: newValue});
  }, [value]);

  useEffect(() => {
    if(isSuccess) {
      queryClient.invalidateQueries(
        {queryKey: ['cameras']}
      ).then();
    }
  }, [isSuccess]);

  return (
    <div
      onClick={(e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
      }}
      className={s.button}
      style={style}
    >
      <button
        className={s.minus}
        onClick={handleMinusClick}
        disabled={isPending}
      >−</button>

      <Input
        value={value}
        onChange={(e) => handleChangeInput(e)}
        disabled={isPending}
      />

      <button
        className={s.plus}
        onClick={handlePlusClick}
        disabled={isPending}
      >+</button>
    </div>
  );
};


interface InputProps {
  value: number,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  disabled: boolean
}

const Input:FC<InputProps> = ({value, onChange, disabled}) => {
  return (
    <input
      className={s.input}
      type="number"
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
