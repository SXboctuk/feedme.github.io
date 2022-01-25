import styled from 'styled-components';
import styles from '../../../constants/stylesProperty';
import { containerProps } from './Container.Interface';

export const ContainerStyled = styled.div<containerProps>`
	max-width: ${styles.screenSize.lg};
	margin: 0 auto;
	width: 100%;
	max-width: ${({ maxWidth }) => maxWidth};

	@media (max-width: ${styles.screenSize.lg}) {
		max-width: ${styles.screenSize.md};
	}
	@media (max-width: ${styles.screenSize.md}) {
		max-width: 100%;
		padding: 0 ${styles.distances.md};
	}
`;
