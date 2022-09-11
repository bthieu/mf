import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Products from './pages/Products';
import ThemeProvider from './theme';

const App = () => {
  return (
    <ThemeProvider>
      {/* <BrowserRouter> */}
        <Products />
      {/* </BrowserRouter> */}
    </ThemeProvider>
    
  );
};

export default App;
