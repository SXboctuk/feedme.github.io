import React from 'react';
import {
	MainScreenInputContainer,
	MainScreenInputSearchIcon,
	MainScreenInput,
	MainScreenSearchButton,
} from './MainScreenSearch.Styled';

const MainScreenSearch = () => {
	return (
		<MainScreenInputContainer>
			<MainScreenInputContainer>
				<MainScreenInputSearchIcon />
				<MainScreenInput placeholder={'Find Best Recipies...'} />
			</MainScreenInputContainer>
			<MainScreenSearchButton>SEARCH</MainScreenSearchButton>
		</MainScreenInputContainer>
	);
};

export default MainScreenSearch;
