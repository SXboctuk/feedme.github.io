import React, { useState } from 'react';
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
import { setCookbookLike, setRecepieLike } from '../../../api/Feedme.Api';

const Card = (props: CardProps) => {
	const { t } = useTranslation('common');
	const { isAuth } = useTypedSelector((state) => state.userReducer);
	const [isLikes, setIsLikes] = useState(props.isLikes);
	const [likesCounter, setLikesCounter] = useState(props.likesCounter);
	const handlerLike = async (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAuth && props.OptionType !== 'Hidden') {
			e.preventDefault();

			if (props.cardType === 'cookbook') {
				const res = await setCookbookLike(isLikes, props.to);
				setIsLikes(res.value);
				setLikesCounter(res.currentLikesCounter);
			}
			if (props.cardType === 'recepie') {
				const res = await setRecepieLike(isLikes, props.to);
				console.log(res);
				setIsLikes(res.value);
				setLikesCounter(res.currentLikesCounter);
			}
		}
	};
	if (props.type == 'wide') {
		return (
			<CardBlockWide to={props.noTo ? '#' : props.to}>
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
								<AlignCenterBlock
									className={isLikes ? 'selected' : ''}
									onClick={handlerLike}
								>
									<CardSvgHeart />
									<CardCounterText>
										{likesCounter} {t('likes')}
									</CardCounterText>
								</AlignCenterBlock>
								<AlignCenterBlock>
									<CardSvgComment />
									<CardCounterText>
										{props.commentsCounter} {t('comments')}
									</CardCounterText>
								</AlignCenterBlock>
							</CardWideSocialCounter>
							{isAuth && props.OptionType != 'Hidden' ? (
								<OptionButtonContainer
									type={props.OptionType}
									elemId={props.to}
									creatorId={props.creatorId}
									isSaved={props.isSaved}
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
						{isAuth && props.OptionType != 'Hidden' ? (
							<OptionButtonContainer
								type={props.OptionType}
								elemId={props.to}
								creatorId={props.creatorId}
								isSaved={props.isSaved}
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
					{props.likesCounter !== undefined &&
					props.commentsCounter !== undefined ? (
						<CardInnerBlock>
							<AlignCenterBlock
								className={isLikes ? 'selected' : ''}
								onClick={handlerLike}
							>
								<CardSvgHeart />
								<CardCounterText>
									{likesCounter} {t('likes')}
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
