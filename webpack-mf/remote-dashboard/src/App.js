import React from 'react';
import DashboardApp from './pages/DashboardApp';
import ThemeProvider from './theme';

const App = () => {
  return (
    <ThemeProvider>
      <DashboardApp />
    </ThemeProvider>
  );
};

export default App;
