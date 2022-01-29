import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '../../../../constants/routePath';
import Card from '../../../../components/shared/Card';
import Section from '../Section';
import { UserChoiceCardsBlock } from './UserChoice.Styled';

import { useTranslation } from 'react-i18next';
import { CardRecepie } from '../../../../interfaces/CardRecipe';
import { recepiesMockData } from '../../../../constants/mocks/Recepies';
const UserChoice = () => {
	const { t } = useTranslation('common');

	const navigate = useNavigate();
	const [cards, setCards] = useState<CardRecepie[]>([]);

	useEffect(() => {
		const data = recepiesMockData.slice(0, 4);
		setCards(data);
	}, []);

	const handlerButton = () => {
		navigate(routePath.RECEPIES);
	};

	return (
		<Section
			buttonText={t('homePage.userChoice.buttonText')}
			sectionTitle={t('homePage.userChoice.sectionTitle')}
			title={t('homePage.userChoice.title')}
			variant="outline"
			background={false}
			buttonOnClick={handlerButton}
		>
			<UserChoiceCardsBlock>
				{cards.map((elem) => (
					<Card
						to={`${routePath.RECEPIES}/${elem.id}`}
						key={elem.id}
						viewsCounter={elem.viewsCounter}
						titleName={elem.titleName}
						creatorName={elem.creatorName}
						imageSrc={elem.imageSrc}
						likesCounter={elem.likesCounter}
						commentsCounter={elem.commentsCounter}
						OptionType={'Recepie'}
						creatorId={'4'}
						isLikes={elem.isLikes}
						cardType={'recepie'}
					/>
				))}
			</UserChoiceCardsBlock>
		</Section>
	);
};

export default UserChoice;
