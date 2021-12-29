import React from 'react';
import Background from '../../components/Background';
import styles from '../../constants/stylesProperty';
import MainScreen from './components/MainScreen';
import OurChoice from './components/OurChoice';
import TrendingRecepies from './components/TrendingRecepies';
import UserChoice from './components/UserChoice/UserChoice';

const HomePage = () => {
	return (
		<>
			<Background backgroundColor={styles.colors.white}>
				<MainScreen />
				<UserChoice />
				<OurChoice />
				<TrendingRecepies />
			</Background>
		</>
	);
};

export default HomePage;
