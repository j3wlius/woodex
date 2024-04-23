import React, { createContext, useState } from 'react';

const MenuContext = createContext({
  isMenuActive: false,
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <MenuContext.Provider value={{ isMenuActive, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;