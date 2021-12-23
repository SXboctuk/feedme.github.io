import styled from 'styled-components';
import { ButtonSolid } from '../../../../components/Button/Button.Styled';
import SvgSearch from '../../../../components/Svg/SvgSearch';

export const MainScreenInput = styled.input`
	height: 70px;
	font-size: 18px;
	width: 100%;
	border: none;
	background: ${({ theme }) => theme.colors.gray};
	border-radius: 10px;
	padding-left: 39px;
	padding-right: 170px;

	&:focus {
		outline: none;
	}

	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		padding-right: 0;
	} ;
`;
export const MainScreenInputContainer = styled.div`
	position: relative;
`;

export const MainScreenInputSearchIcon = styled(SvgSearch)`
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	left: 15px;
`;
export const MainScreenSearchButton = styled(ButtonSolid)`
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translate(0, -50%);

	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		position: static;
		margin-top: 24px;

		transform: translate(0, 0%);
	} ;
`;
