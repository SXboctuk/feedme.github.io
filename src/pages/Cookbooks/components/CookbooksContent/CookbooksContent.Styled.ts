import styled from 'styled-components';
import styles from '../../../../constants/stylesProperty';

export const CookbooksContentMainGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	margin-bottom: ${styles.distances.lg};

	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.xs}) {
		grid-template-columns: 1fr;
	}
`;
