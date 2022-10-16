// Import react utilities:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Import app component and store:
import App from './App';
import { store } from './Redux/store/index.js';

// Import style:
import './index.css';

// Deploy:
import axios from 'axios';

// import dotenv from 'dotenv';
// dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3000';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

root.render( 
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
)

