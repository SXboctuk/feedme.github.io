import React from 'react';
import SvgOptionButton from '../Svg/SvgOptionButton/SvgOptionButton';
import { CardProps } from './Card.Interface';
import {
	CardBlock,
	CardInnerBlock,
	AlignCenterBlock,
	CardSvgWatch,
	CardCounterText,
	CardImage,
	CardTitle,
	CardCreator,
	CardSvgHeart,
	CardSvgComment,
	TitleAndCreatorBlock,
	CardText,
} from './Card.Styled';

import { useTranslation } from 'react-i18next';

const Card = (props: CardProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'cardRecepie' });
	return (
		<CardBlock to={props.to}>
			<CardInnerBlock marginBottom="12px">
				<AlignCenterBlock>
					<CardSvgWatch />
					<CardCounterText>
						{props.viewsCounter} {t('views')}
					</CardCounterText>
				</AlignCenterBlock>
				<SvgOptionButton />
			</CardInnerBlock>

			<CardImage src={props.imageSrc} />
			<TitleAndCreatorBlock marginBottom="12px">
				<CardTitle>{props.titleName}</CardTitle>
				<CardCreator fontSizeCreator={props.fontSizeCreator}>
					{props.creatorName}
				</CardCreator>
			</TitleAndCreatorBlock>
			{props.text ? <CardText>{props.text}</CardText> : null}
			{props.likesCounter && props.commentsCounter ? (
				<CardInnerBlock>
					<AlignCenterBlock>
						<CardSvgHeart />
						<CardCounterText>
							{props.likesCounter} {t('likes')}
						</CardCounterText>
					</AlignCenterBlock>
					<AlignCenterBlock>
						<CardSvgComment />
						<CardCounterText>
							{props.commentsCounter} {t('comments')}
						</CardCounterText>
					</AlignCenterBlock>
				</CardInnerBlock>
			) : null}
		</CardBlock>
	);
};

export default Card;
