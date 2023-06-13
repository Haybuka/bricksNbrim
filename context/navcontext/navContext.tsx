import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface NavProps {
  isNavOpen: boolean;
  handleNavState: () => void;
}

export const NavContext = createContext<NavProps>({} as NavProps);

export const NavContextProvider = ({ children }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavState = () => setIsNavOpen((previous) => !previous);

  const value = { isNavOpen, handleNavState };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
