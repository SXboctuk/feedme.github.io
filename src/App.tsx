import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import { routePath } from './constants/routePath';
import { HomePage } from './pages';
import { defaultTheme } from './Theme';

const App = () => {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route
								path={routePath.HOMEPAGE}
								element={<HomePage />}
							></Route>
						</Routes>
						<Footer />
					</BrowserRouter>
				</GlobalStyles>
			</ThemeProvider>
		</>
	);
};

export default App;
