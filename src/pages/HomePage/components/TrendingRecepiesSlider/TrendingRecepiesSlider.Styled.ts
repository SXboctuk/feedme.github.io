import styled from 'styled-components';
import SvgArrow from '../../../../components/Svg/SvgArrow';
import styles from '../../../../constants/stylesProperty';

export const TrendingRecepiesSliderContainer = styled.div`
	width: 100%;
`;

export const TrendingRecepiesSliderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TrendingRecepiesSliderArrow = styled(SvgArrow)`
	margin: auto 0;
	&[aria-disabled] path {
		opacity: 0.6;
	}
`;

export const TrendingRecepiesSliderButtonLeft = styled(
	TrendingRecepiesSliderArrow,
)`
	transform: rotate(180deg);
	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		margin-right: ${styles.distances.lg};
	} ;
`;

export const TrendingRecepiesSliderContent = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	overflow: hidden;

	& > *:not(:first-child) {
		margin-left: ${styles.distances.lg};
	}
`;

export const TrendingRecepiesSliderButtonRight = styled(
	TrendingRecepiesSliderArrow,
)`
	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		margin-left: ${styles.distances.lg};
	} ;
`;

export const TrendingRecepiesSliderDotsBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${styles.distances.xl};
`;

export const TrendingRecepiesSliderDot = styled.div`
	height: 8px;
	width: 8px;
	background-color: ${({ theme }) => theme.colors.white};
	opacity: 0.5;
	border-radius: ${({ theme }) => theme.borderRadius};

	&:not(:last-child) {
		margin-right: ${styles.distances.md};
	}
	&[aria-checked] {
		height: 16px;
		width: 16px;
		opacity: 1;
	}
`;
