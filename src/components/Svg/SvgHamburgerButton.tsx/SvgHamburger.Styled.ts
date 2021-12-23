import styled from 'styled-components';

export const HamburgerPath = styled.path`
	fill: none;
	stroke: black;
	stroke-width: 6;
	transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
		stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const HamburrgerPath1 = styled(HamburgerPath)`
	stroke-dasharray: 60 207;
	stroke-width: 6;
`;
export const HamburrgerPath2 = styled(HamburgerPath)`
	stroke-dasharray: 60 60;
	stroke-width: 6;
`;
export const HamburrgerPath3 = styled(HamburgerPath)`
	stroke-dasharray: 60 207;
	stroke-width: 6;
`;
export const HamburgerButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	padding: 0;
	-webkit-tap-highlight-color: transparent;

	&.opened ${HamburrgerPath1} {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
	&.opened ${HamburrgerPath2} {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 6;
	}
	&.opened ${HamburrgerPath3} {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
`;
