import styled from 'styled-components';
import SvgArrow from '../../../../components/Svg/SvgArrow';

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
		margin-right: 24px;
	} ;
`;

export const TrendingRecepiesSliderContent = styled.div`
	width: 90%;
	height: 460px;
	display: flex;
	overflow: hidden;

	& > *:not(:first-child) {
		margin-left: 24px;
	}
`;

export const TrendingRecepiesSliderButtonRight = styled(
	TrendingRecepiesSliderArrow,
)`
	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		margin-left: 24px;
	} ;
`;

export const TrendingRecepiesSliderDotsBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 44px;
`;

export const TrendingRecepiesSliderDot = styled.div`
	height: 8px;
	width: 8px;
	background-color: ${({ theme }) => theme.colors.white};
	opacity: 0.5;
	border-radius: 10px;

	&:not(:last-child) {
		margin-right: 16px;
	}
	&[aria-checked] {
		height: 16px;
		width: 16px;
		opacity: 1;
	}
`;
