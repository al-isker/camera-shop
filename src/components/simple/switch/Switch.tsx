import {FC, ReactNode, useState} from 'react';
import { LayoutGroup, motion } from "framer-motion";

import s from './switch.module.css';

interface SwitchProps {
  options:  string[]

}

export const Switch:FC<SwitchProps> = ({options}) => {
  const [active, setActive] = useState(0)

  return (
    <div className={s.switch}>
      <LayoutGroup>
        {options.map((option: string, i: number) => (
          <SwitchItem
            isActive={active === i}
            onClick={() => setActive(i)}
          >
            {option}
          </SwitchItem>
        ))}
      </LayoutGroup>
    </div>
  );
};


interface SwitchItemProps {
  children: ReactNode
  isActive: boolean
  onClick: object
}

const SwitchItem:FC<SwitchItemProps> = ({children, isActive, onClick}) => {
  return (
    isActive && (
      <motion.div
        layout
        className={s.switch_item_active}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  )
}
