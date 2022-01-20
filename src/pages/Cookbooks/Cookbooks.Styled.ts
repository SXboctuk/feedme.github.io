import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const CookbooksContentMainGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	margin-bottom: ${styles.distances.mdPlus};

	@media (max-width: ${styles.screenSize.md}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 1fr;
	}
`;
