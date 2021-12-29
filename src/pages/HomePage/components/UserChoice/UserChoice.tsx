import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userChoiceMockData } from '../../../../constants/mocks/UserChoiceData/UserChoiceData';
import { routePath } from '../../../../constants/routePath';
import RecepieCard from '../../../../components/RecepieCard';
import { RecepieCardProps } from '../../../../components/RecepieCard/RecepieCard.Interface';
import Section from '../Section';
import { UserChoiceCardsBlock } from './UserChoice.Styled';

import { useTranslation } from 'react-i18next';
const UserChoice = () => {
	const { t } = useTranslation('common', {
		keyPrefix: 'homePage.userChoice',
	});

	const navigate = useNavigate();
	const [cards, setCards] = useState<RecepieCardProps[]>([]);

	useEffect(() => {
		setCards(userChoiceMockData);
	}, []);

	const handlerButton = () => {
		navigate(routePath.RECEPIES);
	};

	return (
		<Section
			buttonText={t('buttonText')}
			sectionTitle={t('sectionTitle')}
			title={t('title')}
			variant="outline"
			background={false}
			buttonOnClick={handlerButton}
		>
			<UserChoiceCardsBlock>
				{cards.map((elem) => (
					<RecepieCard
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
