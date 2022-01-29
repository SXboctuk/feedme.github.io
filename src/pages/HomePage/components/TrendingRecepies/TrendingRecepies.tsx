import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../../../constants/routePath';
import Card from '../../../../components/shared/Card';

import Section from '../Section';
import TrendingRecepiesSlider from '../TrendingRecepiesSlider/TrendingRecepiesSlider';
import { TrendingRecepiesBlock } from './Trending.Styled';

import { useTranslation } from 'react-i18next';
import styles from '../../../../constants/stylesProperty';
import { CardRecepie } from '../../../../interfaces/CardRecipe';
import { recepiesMockData } from '../../../../constants/mocks/Recepies';

const TrendingRecepies = () => {
	const { t } = useTranslation('common');

	const [cards, setCards] = useState<CardRecepie[]>([]);
	useEffect(() => {
		const data = recepiesMockData.slice(0, 6);
		setCards(data);
	}, []);
	const navigate = useNavigate();
	const handlerButton = () => {
		navigate(routePath.RECEPIES);
	};
	return (
		<TrendingRecepiesBlock>
			<Section
				buttonText={t('homePage.trendingRecepies.buttonText')}
				sectionTitle={t('homePage.trendingRecepies.sectionTitle')}
				colorNameTitle={styles.colors.white}
				title={t('homePage.trendingRecepies.title')}
				variant="white"
				background={true}
				buttonOnClick={handlerButton}
			>
				<TrendingRecepiesSlider>
					{cards.map((elem) => (
						<Card
							key={elem.id}
							to={`${routePath.RECEPIES}/${elem.id}`}
							imageSrc={elem.imageSrc}
							titleName={elem.titleName}
							creatorName={elem.creatorName}
							viewsCounter={elem.viewsCounter}
							fontSizeCreator="12px"
							OptionType={'Recepie'}
							creatorId={'4'}
							isLikes={elem.isLikes}
							cardType={'recepie'}
						/>
					))}
				</TrendingRecepiesSlider>
			</Section>
		</TrendingRecepiesBlock>
	);
};

export default TrendingRecepies;
