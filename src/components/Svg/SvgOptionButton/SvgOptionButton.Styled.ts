import styled from 'styled-components';

export const SvgOptionButtonBlock = styled.div`
	display: flex;
`;

export const SvgOptionButtonRound = styled.div`
	height: 5px;
	width: 5px;
	background-color: ${({ theme }) => theme.colors.grayDark};
	border-radius: 50%;

	&:not(:first-child) {
		margin-left: 4px;
	}
`;
