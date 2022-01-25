import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ProfileCookbooksContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: ${styles.distances.md};
	padding: ${styles.distances.xl} 0;

	@media (max-width: ${styles.screenSize.lg}) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (max-width: ${styles.screenSize.md}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 1fr;
	}
`;
