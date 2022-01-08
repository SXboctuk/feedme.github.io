import styled from 'styled-components';

export const RecepirsRangeSliderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	position: relative;
`;
export const RecepiesInput = styled.input`
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	pointer-events: none;
	position: absolute;
	height: 0;
	width: 100%;
	outline: none;
	z-index: 5;

	&::-webkit-slider-thumb {
		-webkit-appearance: media-sliderthumb;

		background: ${({ theme }) => theme.colors.primary};

		border: none;
		border-radius: 50%;
		cursor: pointer;
		height: 12px;
		width: 12px;
		margin-top: 4px;
		pointer-events: all;
		position: relative;
	}
`;
export const RecepiesSliderBlock = styled.div`
	position: relative;
	width: 100%;
`;
export const RecepiesRangeTrack = styled.div`
	position: absolute;
	border-radius: 3px;
	height: 5px;

	background-color: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	width: 100%;
	z-index: 1;
`;
export const RecepiesSliderRange = styled.div`
	position: absolute;
	border-radius: 3px;
	height: 5px;

	background-color: ${({ theme }) => theme.colors.primary};
	z-index: 2;
`;
export const RecepiesSliderLeft = styled.div`
	position: absolute;

	color: ${({ theme }) => theme.colors.textMain};
	font-size: 12px;
	margin-top: 20px;

	left: 2px;

	font-weight: normal;
	font-size: 14px;
`;
export const RecepiesSliderRight = styled.div`
	position: absolute;

	color: ${({ theme }) => theme.colors.textMain};
	font-size: 12px;
	margin-top: 20px;

	right: 2px;

	font-weight: normal;
	font-size: 14px;
`;
