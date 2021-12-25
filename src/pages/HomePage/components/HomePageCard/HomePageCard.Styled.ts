import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgComment from '../../../../components/Svg/SvgComment';
import SvgHeart from '../../../../components/Svg/SvgHeart';
import SvgWatch from '../../../../components/Svg/SvgWatch';
import {
	HomePageCardCreatorProps,
	StyledHomePageCardInnerBlockProps,
} from './HomePageCard.Interface';

export const HomePageCardInnerBlock = styled.div<StyledHomePageCardInnerBlockProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.textMain};

	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
	margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
`;
export const HomePageCardCounterText = styled.span`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textMain};

	@media (max-width: ${({ theme }) => theme.displaySize.lg}) {
		font-size: 12px;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		font-size: 14px;
	}
`;
export const HomePageCardTitle = styled.div`
	font-family: Montserrat;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.textMain};
`;
export const HomePageCardCreator = styled.div<HomePageCardCreatorProps>`
	font-weight: normal;
	font-size: ${({ fontSizeCreator }) =>
		fontSizeCreator ? fontSizeCreator : '14px'};
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textMain};
`;
export const HomePageCardImage = styled.img`
	width: 100%;
	height: 20%;
	flex: 1 1 auto;
	object-fit: cover;
	border-radius: ${({ theme }) => theme.borderRadius};
	margin-bottom: 16px;
`;
export const AlignCenterBlock = styled.div`
	display: flex;
	align-items: center;
`;
export const HomePageCardSvgHeart = styled(SvgHeart)`
	margin-right: 8px;
`;
export const HomePageCardSvgComment = styled(SvgComment)`
	margin-right: 8px;
`;
export const HomePageCardSvgWatch = styled(SvgWatch)`
	margin-right: 8px;
`;
export const HomePageCardBlock = styled(Link)`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 24px;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

	&:hover {
		box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);
		${HomePageCardTitle} {
			color: ${({ theme }) => theme.colors.primary};
		}
		${HomePageCardSvgHeart} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
		${HomePageCardSvgComment} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const TitleAndCreatorBlock = styled(HomePageCardInnerBlock)`
	align-items: baseline;
`;
