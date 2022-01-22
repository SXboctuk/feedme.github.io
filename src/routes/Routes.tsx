import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes as RouterDomRoutes,
} from 'react-router-dom';
import Background from '../components/Background';
import Layout from '../components/Layout';
import { routePath } from '../constants/routePath';
import styles from '../constants/stylesProperty';

import CookbooksContainter from '../pages/Cookbooks/Cookbooks.Containter';
import HomePage from '../pages/HomePage';
import RecepiesContainer from '../pages/Recepies/Recepies.Container';
import SignInContainer from '../pages/SignIn/SignIn.Container';
import SignUpContainer from '../pages/SignUp/SignUp.Container';

const Routes = () => {
	return (
		<BrowserRouter>
			<RouterDomRoutes>
				<Route path={routePath.SIGN_IN} element={<SignInContainer />} />
				<Route path={routePath.SIGN_UP} element={<SignUpContainer />} />
				<Route element={<Layout />}>
					<Route path={routePath.HOMEPAGE} element={<HomePage />} />
					<Route
						element={
							<Background backgroundColor={styles.colors.gray} />
						}
					>
						<Route path={routePath.RECEPIES}>
							<Route
								index
								element={<RecepiesContainer />}
							></Route>
							<Route
								path={':id'}
								element={<RecepiesContainer />}
							></Route>
						</Route>
						<Route path={routePath.COOKBOOKS}>
							<Route
								index
								element={<CookbooksContainter />}
							></Route>
							<Route
								path={':id'}
								element={<CookbooksContainter />}
							></Route>
						</Route>
						<Route
							path={routePath.ABOUT_US}
							element={<div>About us</div>}
						></Route>
						<Route
							path={'*'}
							element={<div>Not found</div>}
						></Route>
					</Route>
				</Route>
			</RouterDomRoutes>
		</BrowserRouter>
	);
};

export default Routes;
