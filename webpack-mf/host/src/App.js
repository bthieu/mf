import React from 'react';
import ThemeProvider from './theme';
// routes
import Router from './routes';

const App = () => {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};

export default App;
