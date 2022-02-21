import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const CookbooksContentMainGrid = styled.div`
	display: grid;
	grid-template-columns: 33% 33% 33%;
	grid-gap: 24px;
	margin-bottom: ${styles.distances.mdPlus};

	@media (max-width: ${styles.screenSize.md}) {
		grid-template-columns: 50% 50%;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 100%;
	}
`;
