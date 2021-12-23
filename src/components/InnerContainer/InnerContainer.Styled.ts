import styled from 'styled-components';

export const InnerContainerStyled = styled.div`
	max-width: ${({ theme }) => theme.displaySize.lg};
	margin: 0 auto;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.displaySize.lg}) {
		max-width: ${({ theme }) => theme.displaySize.md};
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		max-width: 100%;
		padding: 0 15px;
	}
	/* @media (max-width: ${({ theme }) => theme.displaySize.xs}) {
	} */
`;
