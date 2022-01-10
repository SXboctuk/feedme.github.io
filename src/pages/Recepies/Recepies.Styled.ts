import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const RecepiesContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${styles.distances.lg};
	padding-bottom: ${styles.distances.lg};
`;
