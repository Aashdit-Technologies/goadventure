import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
