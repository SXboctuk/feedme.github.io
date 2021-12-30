import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingRecepiesDataMock } from '../../../../constants/mocks/TrendingRecepiesData/TrendingRecepiesData';
import { routePath } from '../../../../constants/routePath';
import Card from '../../../../components/Card';
import { CardProps } from '../../../../components/Card/Card.Interface';
import Section from '../Section';
import TrendingRecepiesSlider from '../TrendingRecepiesSlider/TrendingRecepiesSlider';
import { TrendingRecepiesBlock } from './Trending.Styled';

import { useTranslation } from 'react-i18next';
import styles from '../../../../constants/stylesProperty';

const TrendingRecepies = () => {
	const { t } = useTranslation('common', {
		keyPrefix: 'homePage.trendingRecepies',
	});

	const [cards, setCards] = useState<CardProps[]>([]);
	useEffect(() => {
		setCards(TrendingRecepiesDataMock);
	}, []);
	const navigate = useNavigate();
	const handlerButton = () => {
		navigate(routePath.RECEPIES);
	};
	return (
		<TrendingRecepiesBlock>
			<Section
				buttonText={t('buttonText')}
				sectionTitle={t('sectionTitle')}
				colorNameTitle={styles.colors.white}
				title={t('title')}
				variant="white"
				background={true}
				buttonOnClick={handlerButton}
			>
				<TrendingRecepiesSlider>
					{cards.map((elem) => (
						<Card
							key={elem.key}
							to={`${routePath.RECEPIES}/${elem.to}`}
							imageSrc={elem.imageSrc}
							titleName={elem.titleName}
							creatorName={elem.creatorName}
							viewsCounter={elem.viewsCounter}
							fontSizeCreator="12px"
						/>
					))}
				</TrendingRecepiesSlider>
			</Section>
		</TrendingRecepiesBlock>
	);
};

export default TrendingRecepies;
