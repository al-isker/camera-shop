import React, {FC} from 'react';
import {LinearProgress} from "@mui/material";

import s from "./loading.module.css";

interface Props {
  isVisible: boolean;
}

export const Loading:FC<Props> = ({isVisible}) => {
  return (
    isVisible && (
      <div className={s.loading_wrap}>
        <LinearProgress
          className={s.loading}
          color="inherit"
        />
      </div>
    )
  );
};
