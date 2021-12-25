import React from 'react';
import MainScreen from './components/MainScreen';
import OurChoice from './components/OurChoice';
import TrendingRecepies from './components/TrendingRecepies';
import UserChoice from './components/UserChoice/UserChoice';

const HomePage = () => {
	return (
		<>
			<MainScreen />
			<UserChoice />
			<OurChoice />
			<TrendingRecepies />
		</>
	);
};

export default HomePage;
