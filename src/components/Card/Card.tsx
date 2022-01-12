import React from 'react';
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
	CardImageWrapper,
	CardWideWrapper,
	CardWideContent,
	CardWideImageWrapper,
	CardWideSocialCounter,
	CardBlockWide,
	CardBlockWrapper,
	CardBottomBlock,
} from './Card.Styled';

import { useTranslation } from 'react-i18next';
import OptionButtonContainer from '../OptionButton/OptionButton.Container';

const Card = (props: CardProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'cardRecepie' });

	if (props.type == 'wide') {
		return (
			<CardBlockWide to={props.to}>
				<CardWideWrapper>
					<CardWideImageWrapper>
						<CardImage src={props.imageSrc} />
					</CardWideImageWrapper>
					<CardWideContent>
						<TitleAndCreatorBlock marginBottom="12px">
							<CardTitle>{props.titleName}</CardTitle>
							<CardCreator
								fontSizeCreator={props.fontSizeCreator}
							>
								{props.creatorName}
							</CardCreator>
						</TitleAndCreatorBlock>
						<CardText>{props.text}</CardText>
						<CardBottomBlock>
							<CardWideSocialCounter>
								<AlignCenterBlock>
									<CardSvgWatch />
									<CardCounterText>
										{props.viewsCounter} {t('views')}
									</CardCounterText>
								</AlignCenterBlock>
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
							</CardWideSocialCounter>
							<OptionButtonContainer
								type={props.OptionType}
								id={props.to}
							/>
						</CardBottomBlock>
					</CardWideContent>
				</CardWideWrapper>
			</CardBlockWide>
		);
	} else {
		return (
			<CardBlock to={props.to}>
				<CardBlockWrapper>
					<CardInnerBlock marginBottom="12px">
						<AlignCenterBlock>
							<CardSvgWatch />
							<CardCounterText>
								{props.viewsCounter} {t('views')}
							</CardCounterText>
						</AlignCenterBlock>
						<OptionButtonContainer
							type={props.OptionType}
							id={props.to}
						/>
					</CardInnerBlock>
					<CardImageWrapper>
						<CardImage src={props.imageSrc} />
					</CardImageWrapper>

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
				</CardBlockWrapper>
			</CardBlock>
		);
	}
};

export default Card;
