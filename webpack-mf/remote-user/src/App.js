import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import User from './pages/User';
import ThemeProvider from './theme';

const App = () => {
  return (
    <ThemeProvider>
      {/* <BrowserRouter> */}
        <User />
      {/* </BrowserRouter> */}
    </ThemeProvider>
    
  );
};

export default App;
