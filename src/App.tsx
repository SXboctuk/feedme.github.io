import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/GlobalStyles';

import Routes from './routes';

import { defaultTheme } from './theme';

const App = () => {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles>
					<Routes />
				</GlobalStyles>
			</ThemeProvider>
		</>
	);
};

export default App;
