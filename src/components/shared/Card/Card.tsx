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
import OptionButtonContainer from '../../OptionButton/OptionButton.Container';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Card = (props: CardProps) => {
	const { t } = useTranslation('common');
	const { isAuth } = useTypedSelector((state) => state.userReducer);

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
							{isAuth ? (
								<OptionButtonContainer
									type={props.OptionType}
									elemId={props.to}
									creatorId={props.creatorId}
								/>
							) : null}
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
						{isAuth ? (
							<OptionButtonContainer
								type={props.OptionType}
								elemId={props.to}
								creatorId={props.creatorId}
							/>
						) : null}
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
