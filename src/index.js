import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { BrowserRouter } from 'react-router-dom';

// import * as api from './services/movieDatabaseApi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// api.getTrendings().then(console.log);
// api.searchMovie('bullet').then(console.log);
