import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes as RouterDomRoutes,
} from 'react-router-dom';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { routePath } from '../constants/routePath';
import styles from '../constants/stylesProperty';
import { HomePage } from '../pages';
import Cookbooks from '../pages/Cookbooks';
import Recepies from '../pages/Recepies';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Background backgroundColor={styles.colors.gray}>
				<RouterDomRoutes>
					<Route
						path={routePath.HOMEPAGE}
						element={<HomePage />}
					></Route>
					<Route path={routePath.RECEPIES}>
						<Route index element={<Recepies />}></Route>
						<Route path={':id'} element={<Recepies />}></Route>
					</Route>
					<Route path={routePath.COOKBOOKS}>
						<Route index element={<Cookbooks />}></Route>
						<Route path={':id'} element={<Cookbooks />}></Route>
					</Route>
					<Route
						path={routePath.ABOUTUS}
						element={<div>About us</div>}
					></Route>
					<Route path={'*'} element={<div>Not found</div>}></Route>
				</RouterDomRoutes>
			</Background>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
