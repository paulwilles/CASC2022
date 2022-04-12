import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { palettes, theme } from './index.js';

// eslint-disable-next-line no-unused-vars
const CustomThemeContext = createContext();

const customThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle': {
      return {theme: state.theme === 'dark' ? 'light' : 'dark'}
    };
    case 'set': {
      return {theme: palettes[action.value] || state.theme }
    };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    };
  }
};

const CustomThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customThemeReducer, {theme: 'dark'});
  return (
    <CustomThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme(state.theme)}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }
  return context;
};

export { CustomThemeProvider, useCustomTheme };
