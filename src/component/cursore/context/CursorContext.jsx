import { createContext, useState, useContext } from 'react';
const CursorContext = createContext();
export const useCursorContext = () => useContext(CursorContext);
export const CursorContextProvider = ({ children }) => {
  const [initialCursorVariant, setInitialCursorVariant] = useState('');
  const [animateCursorVariant, setAnimateCursorVariant] = useState('');
// This function allows for smooth transitions between cursor states
  const animateCursor = (variant) => {
    setInitialCursorVariant(animateCursorVariant);
    setAnimateCursorVariant(variant);
  };
  return (
    <CursorContext.Provider
      value={{
        initialCursorVariant,
        setInitialCursorVariant,
        animateCursorVariant,
        setAnimateCursorVariant,
        animateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};