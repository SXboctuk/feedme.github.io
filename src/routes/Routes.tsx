import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes as RouterDomRoutes,
	Navigate,
} from 'react-router-dom';
import Background from '../components/Background';
import Layout from '../components/Layout';
import { routePath } from '../constants/routePath';
import styles from '../constants/stylesProperty';
import CookbookContainer from '../pages/Cookbook/Cookbook.Container';
import CookbooksContainter from '../pages/Cookbooks/Cookbooks.Containter';
import CreateCookbook from '../pages/CreateCookbook';
import CreateRecepie from '../pages/CreateRecepie';
import HomePage from '../pages/HomePage';
import ProfileCookbooksContainer from '../pages/ProfileCookbooks/ProfileCookbooks.Container';
import ProfileRecepiesContainer from '../pages/ProfileRecepies/ProfileRecepies.Container';
import ProfileSettingsContainer from '../pages/ProfileSettings/ProfileSettings.Container';
import RecepiesContainer from '../pages/Recepies/Recepies.Container';
import RecipeContainer from '../pages/Recipe/Recipe.Container';
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
						<Route
							path={routePath.RECEPIES}
							element={<RecepiesContainer />}
						>
							<Route
								path={':recipeid'}
								element={<RecipeContainer />}
							></Route>
						</Route>
						<Route
							path={routePath.COOKBOOKS}
							element={<CookbooksContainter />}
						>
							<Route
								path={':cookbookid'}
								element={<CookbookContainer />}
							></Route>
						</Route>
						<Route
							path={routePath.ABOUT_US}
							element={<div>About us</div>}
						></Route>
						<Route path={routePath.PROFILE + '/:id'}>
							<Route
								index
								element={
									<Navigate
										to={routePath.PROFILE_COOKBOOKS}
									/>
								}
							/>

							<Route
								path={routePath.PROFILE_COOKBOOKS}
								element={<ProfileCookbooksContainer />}
							></Route>

							<Route
								path={routePath.PROFILE_COOKBOOKS}
								element={<ProfileCookbooksContainer />}
							>
								<Route
									path={routePath.CREATE}
									element={<CreateCookbook />}
								></Route>
								<Route
									path={':cookbookid/' + routePath.EDIT}
									element={<CreateCookbook />}
								></Route>
								<Route
									path={':cookbookid'}
									element={<CookbookContainer />}
								></Route>
							</Route>
							<Route
								path={routePath.PROFILE_RECEPIES}
								element={<ProfileRecepiesContainer />}
							>
								<Route
									path={routePath.CREATE}
									element={<CreateRecepie />}
								></Route>
								<Route
									path={':recipeid/' + routePath.EDIT}
									element={<CreateRecepie />}
								></Route>
								<Route
									path={':recipeid'}
									element={<RecipeContainer />}
								></Route>
							</Route>
							<Route
								path={routePath.PROFILE_SETTINGS}
								element={<ProfileSettingsContainer />}
							></Route>
						</Route>

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
