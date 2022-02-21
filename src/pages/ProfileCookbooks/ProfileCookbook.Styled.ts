import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ProfileCookbooksContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	grid-gap: ${styles.distances.md};
	padding: ${styles.distances.xl} 0;

	@media (max-width: ${styles.screenSize.lg}) {
		grid-template-columns: 33% 33% 33%;
	}
	@media (max-width: ${styles.screenSize.md}) {
		grid-template-columns: 50% 50%;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 100%;
	}
`;
