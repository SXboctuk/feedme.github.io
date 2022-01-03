import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgComment from '../Svg/SvgComment';
import SvgHeart from '../Svg/SvgHeart';
import SvgWatch from '../Svg/SvgWatch';
import styles from '../../constants/stylesProperty';
import { CardCreatorProps, StyledCardInnerBlockProps } from './Card.Interface';

export const CardInnerBlock = styled.div<StyledCardInnerBlockProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.textMain};

	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
	margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
`;
export const CardCounterText = styled.span`
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
export const CardTitle = styled.div`
	font-family: Montserrat;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.textMain};
`;
export const CardCreator = styled.div<CardCreatorProps>`
	font-weight: normal;
	font-size: ${({ fontSizeCreator }) =>
		fontSizeCreator ? fontSizeCreator : '14px'};
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textMain};
`;
export const CardImage = styled.img`
	width: 100%;
	height: 20%;
	flex: 1 1 auto;
	object-fit: cover;
	border-radius: ${({ theme }) => theme.borderRadiusSpecial};
	margin-bottom: ${styles.distances.md};
`;
export const AlignCenterBlock = styled.div`
	display: flex;
	align-items: center;
`;
export const CardSvgHeart = styled(SvgHeart)`
	margin-right: 8px;
`;
export const CardSvgComment = styled(SvgComment)`
	margin-right: 8px;
`;
export const CardSvgWatch = styled(SvgWatch)`
	margin-right: 8px;
`;
export const CardText = styled.div`
	max-height: 65px;
	overflow: hidden;
	width: 100%;
	margin-bottom: ${styles.distances.md};
	color: ${({ theme }) => theme.colors.textMain};
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const CardBlock = styled(Link)`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: ${styles.distances.lg};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

	&:hover {
		box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);
		${CardTitle} {
			color: ${({ theme }) => theme.colors.primary};
		}
		${CardSvgHeart} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
		${CardSvgComment} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
		${CardSvgWatch} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const TitleAndCreatorBlock = styled(CardInnerBlock)`
	align-items: baseline;
`;
