import React, { createContext, useState } from "react";

export const DelegadoContext = createContext();

export function DelegadoProvider(props) {
  const [open, setOpen] = useState(false);
  return (
    <DelegadoContext.Provider value={{
      open,
      setOpen
    }}
    >
      {props.children}
    </DelegadoContext.Provider>
  );
};