import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ProfileRecepiesContentWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${styles.distances.md};
	padding: ${styles.distances.xl} 0;
`;
