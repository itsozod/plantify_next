"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnReconnect: false,
          revalidateOnFocus: false,
          dedupingInterval: 1000000,
          shouldRetryOnError: false,
          keepPreviousData: true,
        }}
      >
        {children}
      </SWRConfig>
    </>
  );
};

export default Provider;
