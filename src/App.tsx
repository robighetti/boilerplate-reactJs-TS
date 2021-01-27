import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
