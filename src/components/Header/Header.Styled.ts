import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: ${styles.distances.sm} 0;
`;
export const HeaderNavBlock = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1 1 auto;
	margin-left: 10%;

	@media (max-width: ${styles.screenSize.sm}) {
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
				margin-bottom: ${styles.distances.mdPlus};
			}
		}
	}
`;
export const HeaderHamburger = styled.div`
	display: none;
	@media (max-width: ${styles.screenSize.sm}) {
		display: block;
	}
`;

export const HeaderBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderUserWrapper = styled.div`
	@media (max-width: ${styles.screenSize.sm}) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
