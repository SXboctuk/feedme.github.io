import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgComment from '../Svg/SvgComment';
import SvgHeart from '../Svg/SvgHeart';
import SvgWatch from '../Svg/SvgWatch';
import styles from '../../constants/stylesProperty';
import { CardCreatorProps, StyledCardInnerBlockProps } from './Card.Interface';
import OptionButton from '../OptionButton';

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
	height: 100%;
	width: 100%;

	object-fit: cover;

	position: absolute;
	top: 0;
	left: 0;
`;
export const CardImageWrapper = styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;

	border-radius: ${({ theme }) => theme.borderRadiusSpecial};
	margin-bottom: ${styles.distances.md};
	overflow: hidden;
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
export const CardOptionButton = styled(OptionButton)``;
export const CardText = styled.div`
	width: 100%;
	margin-bottom: ${styles.distances.md};
	color: ${({ theme }) => theme.colors.textMain};
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
`;
export const CardBlock = styled(Link)`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;

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
export const CardBlockWrapper = styled.div`
	padding: ${styles.distances.lg};
`;

export const TitleAndCreatorBlock = styled(CardInnerBlock)`
	align-items: baseline;
`;

export const CardWideWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
export const CardWideImageWrapper = styled.div`
	width: 30%;
	padding-top: 20%;
	position: relative;
	border-radius: ${({ theme }) => theme.borderRadiusSpecial};
	overflow: hidden;
`;
export const CardWideContent = styled.div`
	padding: ${styles.distances.lg};
	display: flex;
	flex-direction: column;
`;
export const CardWideSocialCounter = styled.div`
	display: flex;

	& > :not(:last-child) {
		margin-right: ${styles.distances.md};
	}
`;
export const CardBottomBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
	align-items: flex-end;
`;
export const CardBlockWide = styled(CardBlock)`
	border-radius: ${({ theme }) => {
		return `${'50px'} ${theme.borderRadius} ${theme.borderRadius} ${
			theme.borderRadius
		} `;
	}};
`;
