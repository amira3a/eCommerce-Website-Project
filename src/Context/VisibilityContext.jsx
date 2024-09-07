import React, { createContext, useState, useContext } from "react";


const VisibilityContext = createContext();


export const useVisibility = () => useContext(VisibilityContext);


export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    };
    
    

  return (
    <VisibilityContext.Provider
      value={{ isVisible, toggleVisibility }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
