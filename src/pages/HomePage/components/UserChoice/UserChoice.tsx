import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userChoiceMockData } from '../../../../constants/mocks/UserChoiceData/UserChoiceData';
import { routePath } from '../../../../constants/routePath';
import HomePageCard from '../HomePageCard';
import { HomePageCardProps } from '../HomePageCard/HomePageCard.Interface';
import Section from '../Section';
import { UserChoiceCardsBlock } from './UserChoice.Styled';

const UserChoice = () => {
	const navigate = useNavigate();
	const [cards, setCards] = useState<HomePageCardProps[]>([]);

	useEffect(() => {
		setCards(userChoiceMockData);
	}, []);

	const handlerButton = () => {
		navigate(routePath.RECEPIES);
	};

	return (
		<Section
			buttonText="Show More"
			nameTitle="USERS CHOICE"
			title="20 Highest-Rated Recipes"
			colorNameTitle=""
			variant="outline"
			background={false}
			buttonOnClick={handlerButton}
		>
			<UserChoiceCardsBlock>
				{cards.map((elem) => (
					<HomePageCard
						to={elem.to}
						key={elem.key}
						viewsCounter={elem.viewsCounter}
						titleName={elem.titleName}
						creatorName={elem.creatorName}
						imageSrc={elem.imageSrc}
						likesCounter={elem.likesCounter}
						commentsCounter={elem.commentsCounter}
					/>
				))}
			</UserChoiceCardsBlock>
		</Section>
	);
};

export default UserChoice;
