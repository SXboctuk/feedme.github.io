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
import { useTranslation } from 'react-i18next';
import { CardCookbook } from '../../../../interfaces/Cookbook';
import { cookbooksMockData } from '../../../../constants/mocks/Cookbooks';
const OurChoice = () => {
	const { t } = useTranslation('common', {
		keyPrefix: 'homePage.ourChoice',
	});

	const [card, setCard] = useState<CardCookbook[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const data = cookbooksMockData.slice(0, 4);
		setCard(data);
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
			{card.length >= 3 ? (
				<MainGrid>
					<BigCard>
						<OurChoiceCard
							image={card[0].imageSrc}
							buttonText={card[0].titleName}
							cookbookId={card[0].to}
						/>
					</BigCard>
					<GridIncide>
						<WideCard>
							<OurChoiceCard
								image={card[1].imageSrc}
								buttonText={card[1].titleName}
								cookbookId={card[1].to}
							/>
						</WideCard>
						<SmallCard>
							<OurChoiceCard
								image={card[2].imageSrc}
								buttonText={card[2].titleName}
								cookbookId={card[2].to}
							/>
						</SmallCard>
						<SmallCard>
							<OurChoiceCard
								image={card[3].imageSrc}
								buttonText={card[3].titleName}
								cookbookId={card[3].to}
							/>
						</SmallCard>
					</GridIncide>
				</MainGrid>
			) : null}
		</Section>
	);
};

export default OurChoice;
