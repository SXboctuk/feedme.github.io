import styled from 'styled-components';

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 12px 0;
`;
export const HeaderNavBlock = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1 1 auto;
	margin-left: 10%;

	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		display: none;

		&.opened {
			position: absolute;
			z-index: 3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			top: calc(100% - 1px);
			/* left: 50%;
			transform: translate(-50%); */
			margin: 0 auto;

			background-color: ${({ theme }) => theme.colors.white};
			border-radius: 0 0 10px 10px;
			padding: 0 12px 12px 12px;
			* {
				margin-bottom: 24px;
			}
		}
	}
`;
export const HeaderHamburger = styled.div`
	display: none;
	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		display: block;
	}
`;
