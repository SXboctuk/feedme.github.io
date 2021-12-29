import React, { useEffect, useState } from 'react';
import Section from '../Section';
import {
	MainGrid,
	BigCard,
	GridIncide,
	WideCard,
	SmallCard,
} from './OurChoice.Styled';
import OurChoiceCard from '../OurChoiceCard';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../../../constants/routePath';
import { OurChoiceDataMock } from '../../../../constants/mocks/OutChoiceData/OurChoiceData';
import { ourChoiceCardProps } from '../OurChoiceCard/OurChoiceCard.Interface';

import { useTranslation } from 'react-i18next';

const OurChoice = () => {
	const { t } = useTranslation('common', {
		keyPrefix: 'homePage.ourChoice',
	});

	const [card, setCard] = useState<ourChoiceCardProps[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		setCard(OurChoiceDataMock);
	}, []);
	const handlerButton = () => {
		navigate(routePath.COOKBOOKS);
	};

	return (
		<Section
			buttonText={t('buttonText')}
			sectionTitle={t('sectionTitle')}
			title={t('title')}
			colorNameTitle=""
			variant="outline"
			background={false}
			buttonOnClick={handlerButton}
		>
			{card.length > 0 ? (
				<MainGrid>
					<BigCard>
						<OurChoiceCard
							image={card[0].image}
							buttonText={card[0].buttonText}
							cookbookId={card[0].cookbookId}
						/>
					</BigCard>
					<GridIncide>
						<WideCard>
							<OurChoiceCard
								image={card[1].image}
								buttonText={card[1].buttonText}
								cookbookId={card[1].cookbookId}
							/>
						</WideCard>
						<SmallCard>
							<OurChoiceCard
								image={card[2].image}
								buttonText={card[2].buttonText}
								cookbookId={card[2].cookbookId}
							/>
						</SmallCard>
						<SmallCard>
							<OurChoiceCard
								image={card[3].image}
								buttonText={card[3].buttonText}
								cookbookId={card[3].cookbookId}
							/>
						</SmallCard>
					</GridIncide>
				</MainGrid>
			) : null}
		</Section>
	);
};

export default OurChoice;
