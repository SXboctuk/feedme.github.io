import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import FullscreenLoading from './components/FullscreenLoading';
import GlobalStyles from './components/GlobalStyles';
import Routes from './routes';
import { defaultTheme } from './theme';

const App = () => {
	return (
		<Suspense fallback={<FullscreenLoading />}>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles>
					<Routes />
				</GlobalStyles>
			</ThemeProvider>
		</Suspense>
	);
};

export default App;
