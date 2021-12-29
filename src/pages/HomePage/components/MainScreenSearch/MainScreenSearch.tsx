import React from 'react';
import {
	MainScreenInputContainer,
	MainScreenInputSearchIcon,
	MainScreenInput,
	MainScreenSearchButton,
} from './MainScreenSearch.Styled';

import { useTranslation } from 'react-i18next';

const MainScreenSearch = () => {
	const { t } = useTranslation('common', {
		keyPrefix: 'homePage.mainScreenSearch',
	});
	return (
		<MainScreenInputContainer>
			<MainScreenInputContainer>
				<MainScreenInputSearchIcon />
				<MainScreenInput placeholder={t('placeholder')} />
			</MainScreenInputContainer>
			<MainScreenSearchButton>{t('search')}</MainScreenSearchButton>
		</MainScreenInputContainer>
	);
};

export default MainScreenSearch;
