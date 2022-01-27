import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const CreateCookbookLabel = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
`;

export const CreateCookbookMainTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	margin-bottom: ${styles.distances.xl};
`;
export const CreateCookbookUploadWrapper = styled.div`
	margin-top: ${styles.distances.mdPlus};
`;

export const CreateCookbookWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100%;
	padding: ${styles.distances.xxl} ${styles.distances.xl};

	& > *:not(:last-child) {
		margin-bottom: ${styles.distances.lg};
	}
`;

export const CreateCookbookFooterBlock = styled.div`
	margin-top: ${styles.distances.mdPlus};
	display: flex;
	justify-content: flex-end;

	& > *:last-child {
		margin-left: ${styles.distances.lg};
	}

	@media (max-width: ${styles.screenSize.sm}) {
		flex-direction: column;
		& > *:last-child {
			margin-left: 0;
			margin-top: ${styles.distances.md};
		}
	}
`;

export const CreateCookbookDropRecepieWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const CreateCookbookRecepiesWrapper = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colors.white};
	z-index: 10;
	top: -12px;
	width: 100%;
	padding: ${styles.distances.sm};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
`;

export const CreateCookbookRecepiesItem = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 22px;
	padding: ${styles.distances.sm};
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.grayDark};
	}
`;

export const CreateCookbookRecepies = styled.div`
	margin: ${styles.distances.mdPlus} 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${styles.distances.mdPlus};
`;

export const CreateCookbookError = styled.div`
	font-size: 16px;
	margin-top: ${styles.distances.xs};
	color: ${({ theme }) => theme.colors.danger};
`;
export const CreateCookbookPrevieImageWrapper = styled.div`
	margin-top: ${styles.distances.mdPlus};
	border-radius: ${({ theme }) => theme.borderRadiusImage};
	overflow: hidden;
	width: 100%;
	position: relative;

	&:after {
		content: '';
		display: block;
		padding-top: 50%;
	}
`;
export const CreateCookbookPreviewImage = styled.img`
	position: absolute;
	top: 0;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
