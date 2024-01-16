import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base: '0px',
  xs: '420px',
  sm: '520px',
  md: '768px',
  lg: '980px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  breakpoints,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App /> 
    </ChakraProvider>
  </React.StrictMode>,
)
