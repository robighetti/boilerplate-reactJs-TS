import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import dark from './styles/themes/dark';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={dark}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
