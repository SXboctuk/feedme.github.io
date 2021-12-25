import styled from 'styled-components';

export const UserChoiceCardsBlock = styled.div`
	display: flex;

	flex: wrap;
	flex: 0 1 25%;

	margin-right: -24px;

	& > * {
		margin-right: 24px;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		flex-wrap: wrap;
		margin-right: -24px;
		& > * {
			margin-top: 24px;
			max-width: 50%;
			flex: 1 1 45%;
		}
		& > *:nth-child(1) {
			margin-top: 0;
		}
		& > *:nth-child(2) {
			margin-top: 0;
		}
	}
	@media (max-width: ${({ theme }) => theme.displaySize.sm}) {
		flex-wrap: wrap;
		margin-right: 0;

		& > * {
			max-width: 100%;
			width: 100%;
			margin-right: 0px;
			flex: 1 1 100%;
		}
		& > *:not(:first-child) {
			margin-top: 24px;
		}
	}
`;
