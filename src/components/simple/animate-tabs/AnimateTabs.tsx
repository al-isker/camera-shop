import {FC, MouseEventHandler, ReactNode} from 'react';
import {motion} from "framer-motion";

import s from './animate-tabs.module.css';

interface AnimateTabsProps {
  options:  string[]
  active: string
  setActive: Function
}

export const AnimateTabs:FC<AnimateTabsProps> = ({options, active, setActive}) => {
  return (
    <div className={s.tab_list}>
      {options.map((option: string, i: number) => (
        <AnimateTabsItem
          key={i}
          isActive={option === active}
          onClick={() => setActive(option)}
        >
          {option}
        </AnimateTabsItem>
      ))}
    </div>
  );
};


interface AnimateTabsItemProps {
  children: ReactNode
  isActive: boolean
  onClick: MouseEventHandler
}

const AnimateTabsItem:FC<AnimateTabsItemProps> = ({children, isActive, onClick}) => {
  return (
    <button
      className={s.tab}
      type="button"
      onClick={onClick}
    >
      {isActive && (
        <motion.div layoutId="tab" className={s.tab_motion}></motion.div>
      )}
      <span className={s.tab_title}>{children}</span>
    </button>
  )
}
