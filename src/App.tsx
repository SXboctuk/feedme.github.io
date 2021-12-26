import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import { routePath } from './constants/routePath';
import { HomePage } from './pages';
import Cookbooks from './pages/Cookbooks';
import Recepies from './pages/Recepies';
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

							<Route path={routePath.RECEPIES}>
								<Route index element={<Recepies />}></Route>
								<Route
									path={':id'}
									element={<Recepies />}
								></Route>
							</Route>
							<Route path={routePath.COOKBOOKS}>
								<Route index element={<Cookbooks />}></Route>
								<Route
									path={':id'}
									element={<Cookbooks />}
								></Route>
							</Route>
							<Route
								path={routePath.ABOUTUS}
								element={<div>About us</div>}
							></Route>
							<Route
								path={'*'}
								element={<div>Not found</div>}
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
