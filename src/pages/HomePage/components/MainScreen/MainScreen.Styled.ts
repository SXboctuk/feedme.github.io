import styled from 'styled-components';
import styles from '../../../../constants/stylesProperty';

export const BorderWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadiusImage};
	position: relative;
	overflow: hidden;
`;
export const MainImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
`;
export const MainShadow = styled.div`
	width: 100%;
	height: 100%;
	mix-blend-mode: multiply;
	background: linear-gradient(
		to right,
		rgba(27, 28, 32, 1),
		rgba(27, 28, 32, 0)
	);
	top: 0;
	position: absolute;
`;
export const MainContent = styled.div`
	position: relative;
	width: 75%;
	padding: 240px 0;

	@media (max-width: ${styles.screenSize.lg}) {
		width: 80%;
		padding: 220px 24px;
	}
	@media (max-width: ${styles.screenSize.md}) {
		padding: 180px 16px;
		width: 100%;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		padding: 120px 16px;
	}
`;
export const MainTagLine = styled.h1`
	font-weight: 600;
	font-size: 56px;
	line-height: 72px;
	font-family: 'Montserrat';
	color: ${({ theme }) => theme.colors.white};
	margin-bottom: ${styles.distances.xl};

	@media (max-width: ${styles.screenSize.lg}) {
		font-size: 40px;
		line-height: 56px;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		margin-bottom: ${styles.distances.sm};
	}
`;
export const MainLandingLinksBlock = styled.div`
	display: flex;
	width: 80%;
	margin-top: ${styles.distances.mdPlus};
	justify-content: space-between;

	& > * {
		font-size: 18px;
	}
	& > *:not(:last-child) {
		margin-right: 8px;
	}

	@media (max-width: ${styles.screenSize.lg}) {
		& > * {
			font-size: 14px;
		}
	}
	@media (max-width: ${styles.screenSize.md}) {
		& > * {
			font-size: 12px;
		}
	}
	@media (max-width: ${styles.screenSize.sm}) {
		display: none;
		/* & > * {
			font-size: 10px;
		} */
	}
`;
