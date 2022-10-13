// Import react utilities:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

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

root.render( 
  <ChakraProvider>
    <Provider store={store}>
      <React.StrictMode>
              <BrowserRouter>
            <App />
          </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ChakraProvider>
)

