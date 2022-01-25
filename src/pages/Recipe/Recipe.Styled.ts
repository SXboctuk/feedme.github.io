import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const RecipeWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadiusSpecial};
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100%;
`;

export const RecipeBlock = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;

	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 100%;
	}
`;

export const RecipeImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 0 0 ${({ theme }) => theme.borderRadius} 0;

	@media (max-width: ${styles.screenSize.sm}) {
		border-radius: 0;
	}
`;

export const RecipeContent = styled.div`
	padding: ${styles.distances.xl} ${styles.distances.xl} 0
		${styles.distances.xl};

	@media (max-width: ${styles.screenSize.md}) {
		padding: ${styles.distances.md} ${styles.distances.md} 0
			${styles.distances.md};
	}
`;

export const RecipeHeader = styled.div`
	display: flex;
`;

export const RecipeMainTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	color: ${({ theme }) => theme.colors.textMain};
	margin-bottom: ${styles.distances.md};
	max-width: 80%;
`;
export const RecipeButtonWrapper = styled.div``;
export const RecipeCreatorName = styled(Link)`
	font-weight: 600;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.primary};
	display: inline-block;
	margin-bottom: ${styles.distances.lg};
`;

export const RecipeTextBlock = styled.div`
	margin-bottom: ${styles.distances.lg};
`;

export const RecipeTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;

	margin-bottom: ${styles.distances.md};
`;

export const RecipeText = styled.div`
	font-weight: normal;
	font-size: 14px;
`;

export const RecipeComponentsBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-bottom: ${styles.distances.lg};
`;

export const RecipeComponent = styled.div``;

export const RecipeDirection = styled.div`
	font-weight: normal;
	font-size: 14px;
	margin-bottom: ${styles.distances.xs};
`;

export const RecipeDirectionStep = styled.span`
	font-weight: bold;
	font-size: 14px;
`;

export const RecipeIngredient = styled.div`
	font-weight: normal;
	font-size: 14px;
	margin-bottom: ${styles.distances.xs};

	&:before {
		content: '';
		display: inline-block;
		height: 4px;
		width: 4px;
		margin-bottom: 2px;
		margin-right: 4px;
		border-radius: 4px;
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const RecipeSociaBlock = styled.div`
	display: flex;
`;
export const RecipeCounter = styled.span`
	margin-left: ${styles.distances.xs};
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
`;
export const RecipeSocial = styled.div`
	display: flex;
	align-items: center;
	font-weight: normal;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.textMain};

	&:not(:last-child) {
		margin-right: ${styles.distances.mdPlus};
	}
`;
