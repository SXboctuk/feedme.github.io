import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const CookbookHeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${styles.distances.md};

	@media (max-width: ${styles.screenSize.sm}) {
		flex-wrap: wrap;
	}
`;
export const CookbookWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius};
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100%;
`;
export const CookbookMainTitle = styled.div`
	display: block;
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	font-family: 'Montserrat';
	@media (max-width: ${styles.screenSize.sm}) {
		margin-bottom: ${styles.distances.md};
	}
`;

export const CookbookCreatorBlock = styled.div`
	margin-bottom: ${styles.distances.lg};
`;
export const CookbookButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	@media (max-width: ${styles.screenSize.sm}) {
		justify-content: flex-start;
	}
`;
export const CookbookCreator = styled(Link)`
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.primary};
`;
export const CookbookBlock = styled.div`
	margin: ${styles.distances.xl} ${styles.distances.xl} ${styles.distances.xl}
		${styles.distances.xl};
`;
export const CookbookContentGridBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: ${styles.distances.mdPlus};
	margin-bottom: ${styles.distances.lg};

	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 1fr;
		grid-gap: ${styles.distances.md};
	}
`;
export const CookbookImageWrapper = styled.div`
	min-height: 250px;
	height: 100%;
	width: 100%;
	position: relative;
	border-radius: ${({ theme }) => theme.borderRadiusImage};
	overflow: hidden;
`;
export const CookbookImage = styled.img`
	position: absolute;
	width: 100%;
	top: 0;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

export const CookbookContentTextBlock = styled.div``;

export const CookbookTitle = styled.div`
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Montserrat';
	margin-bottom: ${styles.distances.md};
`;

export const CookbookMainText = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 22px;
`;

export const CookbookSocialBlock = styled.div`
	display: flex; ;
`;

export const CookbookSocial = styled.div`
	display: flex;
	align-items: center;
	font-weight: normal;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.textMain};

	&:not(:last-child) {
		margin-right: ${styles.distances.mdPlus};
	}
`;

export const CookbookRecepiesBlock = styled.div`
	margin-top: ${styles.distances.xxl};
`;
export const CookbookRecepies = styled.div`
	display: grid;
	margin-top: ${styles.distances.mdPlus};
	grid-gap: ${styles.distances.md};
`;
export const CookbookCounter = styled.div`
	margin-left: ${styles.distances.xs};
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
`;
