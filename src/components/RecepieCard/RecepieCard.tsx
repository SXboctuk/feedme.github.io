import React from 'react';
import SvgOptionButton from '../Svg/SvgOptionButton/SvgOptionButton';
import { RecepieCardProps } from './RecepieCard.Interface';
import {
	RecepieCardBlock,
	RecepieCardInnerBlock,
	AlignCenterBlock,
	RecepieCardSvgWatch,
	RecepieCardCounterText,
	RecepieCardImage,
	RecepieCardTitle,
	RecepieCardCreator,
	RecepieCardSvgHeart,
	RecepieCardSvgComment,
	TitleAndCreatorBlock,
} from './RecepieCard.Styled';

import { useTranslation } from 'react-i18next';

const RecepieCard = (props: RecepieCardProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'cardRecepie' });
	return (
		<RecepieCardBlock to={props.to}>
			<RecepieCardInnerBlock marginBottom="12px">
				<AlignCenterBlock>
					<RecepieCardSvgWatch />
					<RecepieCardCounterText>
						{props.viewsCounter} {t('views')}
					</RecepieCardCounterText>
				</AlignCenterBlock>
				<SvgOptionButton />
			</RecepieCardInnerBlock>

			<RecepieCardImage src={props.imageSrc} />
			<TitleAndCreatorBlock marginBottom="12px">
				<RecepieCardTitle>{props.titleName}</RecepieCardTitle>
				<RecepieCardCreator fontSizeCreator={props.fontSizeCreator}>
					{props.creatorName}
				</RecepieCardCreator>
			</TitleAndCreatorBlock>
			{props.likesCounter && props.commentsCounter ? (
				<RecepieCardInnerBlock>
					<AlignCenterBlock>
						<RecepieCardSvgHeart />
						<RecepieCardCounterText>
							{props.likesCounter} {t('likes')}
						</RecepieCardCounterText>
					</AlignCenterBlock>
					<AlignCenterBlock>
						<RecepieCardSvgComment />
						<RecepieCardCounterText>
							{props.commentsCounter} {t('comments')}
						</RecepieCardCounterText>
					</AlignCenterBlock>
				</RecepieCardInnerBlock>
			) : null}
		</RecepieCardBlock>
	);
};

export default RecepieCard;
