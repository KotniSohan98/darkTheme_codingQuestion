import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setToggle(!toggle);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const toggleTheme = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
