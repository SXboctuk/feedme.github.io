import React from 'react';
import SvgOptionButton from '../../../../components/Svg/SvgOptionButton/SvgOptionButton';
import { HomePageCardProps } from './HomePageCard.Interface';
import {
	HomePageCardBlock,
	HomePageCardInnerBlock,
	AlignCenterBlock,
	HomePageCardSvgWatch,
	HomePageCardCounterText,
	HomePageCardImage,
	HomePageCardTitle,
	HomePageCardCreator,
	HomePageCardSvgHeart,
	HomePageCardSvgComment,
	TitleAndCreatorBlock,
} from './HomePageCard.Styled';

// marginBottom={'12px'}
const HomePageCard = (props: HomePageCardProps) => {
	return (
		<HomePageCardBlock to={props.to} key={props.key}>
			<HomePageCardInnerBlock marginBottom="12px">
				<AlignCenterBlock>
					<HomePageCardSvgWatch />
					<HomePageCardCounterText>
						{props.viewsCounter} views
					</HomePageCardCounterText>
				</AlignCenterBlock>
				<SvgOptionButton />
			</HomePageCardInnerBlock>

			<HomePageCardImage src={props.imageSrc} />
			<TitleAndCreatorBlock marginBottom="12px">
				<HomePageCardTitle>{props.titleName}</HomePageCardTitle>
				<HomePageCardCreator fontSizeCreator={props.fontSizeCreator}>
					{props.creatorName}
				</HomePageCardCreator>
			</TitleAndCreatorBlock>
			{props.likesCounter && props.commentsCounter ? (
				<HomePageCardInnerBlock>
					<AlignCenterBlock>
						<HomePageCardSvgHeart />
						<HomePageCardCounterText>
							{props.likesCounter} likes
						</HomePageCardCounterText>
					</AlignCenterBlock>
					<AlignCenterBlock>
						<HomePageCardSvgComment />
						<HomePageCardCounterText>
							{props.commentsCounter} comments
						</HomePageCardCounterText>
					</AlignCenterBlock>
				</HomePageCardInnerBlock>
			) : null}
		</HomePageCardBlock>
	);
};

export default HomePageCard;
