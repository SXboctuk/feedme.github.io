import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingRecepiesDataMock } from '../../../../constants/mocks/TrendingRecepiesData/TrendingRecepiesData';
import { routePath } from '../../../../constants/routePath';
import HomePageCard from '../HomePageCard';
import { HomePageCardProps } from '../HomePageCard/HomePageCard.Interface';
import Section from '../Section';
import TrendingRecepiesSlider from '../TrendingRecepiesSlider/TrendingRecepiesSlider';
import { TrendingRecepiesBlock } from './Trending.Styled';

const TrendingRecepies = () => {
	const [cards, setCards] = useState<HomePageCardProps[]>([]);
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
				buttonText="Show More"
				nameTitle="TOP 10"
				colorNameTitle="#FFFFFF"
				title="Trending Recepies"
				variant="white"
				background={true}
				buttonOnClick={handlerButton}
			>
				<TrendingRecepiesSlider>
					{cards.map((elem) => (
						<HomePageCard
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
