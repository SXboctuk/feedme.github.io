import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const FooterBackground = styled.div`
	background-color: #000000;
	padding: 24px 0;
`;
export const FooterEmailLink = styled.a`
	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.primary};
`;
export const FooterLinksBlock = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: ${styles.screenSize.md}) {
		order: 1;
		flex: 1 1 100%;
		width: 100%;
		margin-bottom: ${styles.distances.sm};
	}
	@media (max-width: ${styles.screenSize.md}) {
		order: 2;
		flex-direction: column;
		align-items: center;

		margin-bottom: 0;
		margin-top: ${styles.distances.sm};

		& > *:not(first-child) {
			margin-top: ${styles.distances.xs};
		}
	}
`;
export const FooterLogoBlock = styled.div`
	@media (max-width: ${styles.screenSize.md}) {
		order: 2;
		flex: 1 1 50%;
	}
	@media (max-width: ${styles.screenSize.md}) {
		order: 1;
	}
`;
export const FooterProjectInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;

	@media (max-width: ${styles.screenSize.md}) {
		order: 3;
		flex: 1 1 50%;
	}
	@media (max-width: ${styles.screenSize.md}) {
		margin-top: ${styles.distances.sm};
	}
`;
export const FooterProjectInfoSmallBlock = styled.div`
	margin-right: ${styles.distances.sm};

	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.white};
`;
export const FooterProjectInfoBigBlock = styled.div``;
export const FooterStyled = styled.footer`
	display: flex;
	align-items: center;

	& > * {
		flex: 1 1 auto;
	}

	@media (max-width: ${styles.screenSize.md}) {
		flex-wrap: wrap;
	}
	@media (max-width: ${styles.screenSize.md}) {
		flex-direction: column;
	}
`;
