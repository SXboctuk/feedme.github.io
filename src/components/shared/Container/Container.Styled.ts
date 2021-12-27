import styled from 'styled-components';
import { containerProps } from './Container.Interface';

export const ContainerStyled = styled.div<containerProps>`
	max-width: ${({ theme }) => theme.displaySize.lg};
	margin: 0 auto;
	width: 100%;
	max-width: ${({ maxWidth }) => maxWidth};

	@media (max-width: ${({ theme }) => theme.displaySize.lg}) {
		max-width: ${({ theme }) => theme.displaySize.md};
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		max-width: 100%;
		padding: 0 15px;
	}
`;
