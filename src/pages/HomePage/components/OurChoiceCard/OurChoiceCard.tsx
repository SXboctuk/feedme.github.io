import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import OptionButtonContainer from '../../../../components/OptionButton/OptionButton.Container';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const OurChoiceCard = (props: ourChoiceCardProps) => {
	const navigate = useNavigate();
	const { isAuth } = useTypedSelector((state) => state.userReducer);
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
				{isAuth ? (
					<OptionButtonContainer
						type={'Cookbook'}
						elemId={props.cookbookId}
						creatorId={'4'}
					/>
				) : null}
			</OurChoiceCardMoreOption>
		</OurChoiceCardBlock>
	);
};

export default OurChoiceCard;
