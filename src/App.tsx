import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import FirstRunApp from './components/FirstRunApp';

import FullscreenLoading from './components/FullscreenLoading';
import GlobalStyles from './components/GlobalStyles';

import { store } from './redux/store';
import Routes from './routes';
import { defaultTheme } from './theme';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<Suspense fallback={<FullscreenLoading />}>
					<GlobalStyles>
						<FirstRunApp>
							<Routes />
						</FirstRunApp>
					</GlobalStyles>
				</Suspense>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
