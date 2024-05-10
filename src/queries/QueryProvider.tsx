"use client";

import {FC, ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const QueryProvider:FC<Props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
