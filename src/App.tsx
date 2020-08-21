import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';


import light from './styles/themes/light';
import dark from './styles/themes/dark';

// Components
import Header from './components/Header';
import Body from './components/Body';

export default () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 
      <Header toggleTheme={toggleTheme} />
      <Body />
    </ThemeProvider>
)};
