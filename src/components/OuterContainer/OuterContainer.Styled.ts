import styled from 'styled-components';

export const OuterContainerStyled = styled.div`
	max-width: 1600px;
	/* padding: 0 32px; */
	margin: 0 auto;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.displaySize.lg}) {
		max-width: 100%;
		padding: 0 15px;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		max-width: 100%;
		padding: 0 15px;
	}
`;
