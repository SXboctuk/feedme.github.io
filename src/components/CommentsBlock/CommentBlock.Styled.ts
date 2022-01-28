import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const Comments = styled.div`
	margin-top: ${styles.distances.lg};
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${styles.distances.lg};
`;

export const CommentsLeftBlock = styled.div`
	margin-right: ${styles.distances.md};
	width: 100%;
`;
export const CommentsInput = styled.input`
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: 14px;
	padding: ${styles.distances.xs} ${styles.distances.sm};
	border: rgba(218, 218, 218, 1) solid 2px;
	width: 100%;

	&:focus {
		outline: none;
	}
`;
export const CommentsInputBlock = styled.div`
	display: flex;
	align-items: flex-start;
`;
export const CommentsWrapper = styled.div`
	padding: ${styles.distances.xxl} ${styles.distances.xl}
		${styles.distances.xl} ${styles.distances.xl};

	@media (max-width: ${styles.screenSize.md}) {
		padding: ${styles.distances.xl} ${styles.distances.md}
			${styles.distances.xl} ${styles.distances.md};
	}
`;
export const CommentsTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;

	margin-bottom: ${styles.distances.md};
`;
export const CommentsError = styled.div`
	font-size: 16px;
	margin-top: ${styles.distances.xs};
	color: ${({ theme }) => theme.colors.danger};
`;
