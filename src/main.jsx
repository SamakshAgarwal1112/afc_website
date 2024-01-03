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
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  breakpoints,
  components: {
    Radio: {
      baseStyle: {
        control: {
          borderColor: '#637E44',
        },
      },
      defaultProps: {
        colorScheme: 'custom',
      },
      sizes: {
        lg: {
          control: {
            width: '25px',
            height: '25px',
          },
          label: {
            fontSize: '24px',
            marginLeft: '30px',
          },
        },
      },
    },
  },
  colors: {
    custom: {
      500: '#637E44',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
