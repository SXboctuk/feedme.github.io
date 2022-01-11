import { useTranslation } from 'react-i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptionButton from '../../../../components/OptionButton';
import { routePath } from '../../../../constants/routePath';
import { ourChoiceCardProps } from './OurChoiceCard.Interface';
import {
	OurChoiceCardWrapper,
	OurChoiceCardImageBackground,
	OurChoiceCardTopShadow,
	OurChoiceCardMoreOption,
	OurChoiceCardButton,
	OurChoiceCardBlock,
} from './OurChoiceCard.Styled';

const OurChoiceCard = (props: ourChoiceCardProps) => {
	const navigate = useNavigate();

	const { t } = useTranslation('common');

	const handlerButton = () => {
		navigate(`${routePath.COOKBOOKS}/${props.cookbookId}`);
	};

	return (
		<OurChoiceCardBlock>
			<OurChoiceCardWrapper>
				<OurChoiceCardImageBackground src={props.image} />
				<OurChoiceCardTopShadow />

				<OurChoiceCardButton onClick={handlerButton}>
					{props.buttonText}
				</OurChoiceCardButton>
			</OurChoiceCardWrapper>
			<OurChoiceCardMoreOption>
				<OptionButton
					Items={[
						{
							text: t('OptionCard.cloneToMyCookBooks'),
							onClick: () => console.log('ourChoice'),
						},
					]}
				/>
			</OurChoiceCardMoreOption>
		</OurChoiceCardBlock>
	);
};

export default OurChoiceCard;
