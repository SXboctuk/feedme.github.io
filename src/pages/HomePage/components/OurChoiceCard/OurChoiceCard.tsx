import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgOptionButton from '../../../../components/Svg/SvgOptionButton/SvgOptionButton';
import { routePath } from '../../../../constants/routePath';
import { ourChoiceCardProps } from './OurChoiceCard.Interface';
import {
	OurChoiceCardWrapper,
	OurChoiceCardImageBackground,
	OurChoiceCardTopShadow,
	OurChoiceCardMoreOption,
	OurChoiceCardButton,
} from './OurChoiceCard.Styled';

const OurChoiceCard = (props: ourChoiceCardProps) => {
	const navigate = useNavigate();

	const handlerButton = () => {
		navigate(`${routePath.COOKBOOKS}/${props.cookbookId}`);
	};

	return (
		<OurChoiceCardWrapper>
			<OurChoiceCardImageBackground src={props.image} />
			<OurChoiceCardTopShadow />
			<OurChoiceCardMoreOption>
				<SvgOptionButton />
			</OurChoiceCardMoreOption>
			<OurChoiceCardButton onClick={handlerButton}>
				{props.buttonText}
			</OurChoiceCardButton>
		</OurChoiceCardWrapper>
	);
};

export default OurChoiceCard;
