import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	position: relative;
	z-index: 2;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
`;

export const WideCard = styled.div`
	max-height: 258px;
	grid-column-start: 1;
	grid-column-end: 3;
	width: 100%;
	height: 100%;
`;
export const SmallCard = styled.div`
	max-height: 258px;
	width: 100%;
	height: 100%;
`;
export const MainGrid = styled(Grid)`
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		grid-template-columns: 1fr;
	}
`;
export const BigCard = styled.div`
	max-height: 540px;
	height: 100%;
	width: 100%;
`;
export const GridIncide = styled(Grid)`
	@media (max-width: ${({ theme }) => theme.displaySize.lg}) {
		${SmallCard} button {
			font-size: 14px;
		}
	}
`;
