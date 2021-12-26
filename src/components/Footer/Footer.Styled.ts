import styled from 'styled-components';

export const FooterBackground = styled.div`
	background-color: #000000;
	padding: 24px 0;
	margin-top: 24px;
`;
export const FooterEmailLink = styled.a`
	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.primary};
`;
export const FooterLinksBlock = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		order: 1;
		flex: 1 1 100%;
		width: 100%;
		margin-bottom: 12px;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		order: 2;
		flex-direction: column;
		align-items: center;

		margin-bottom: 0;
		margin-top: 12px;

		& > *:not(first-child) {
			margin-top: 6px;
		}
	}
`;
export const FooterLogoBlock = styled.div`
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		order: 2;
		flex: 1 1 50%;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		order: 1;
	}
`;
export const FooterProjectInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;

	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		order: 3;
		flex: 1 1 50%;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		margin-top: 12px;
	}
`;
export const FooterProjectInfoSmallBlock = styled.div`
	margin-right: 12px;

	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.white};
`;
export const FooterProjectInfoBigBlock = styled.div``;
export const FooterStyled = styled.footer`
	display: flex;
	align-items: center;

	& > * {
		flex: 1 1 auto;
	}

	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		flex-wrap: wrap;
	}
	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		flex-direction: column;
	}
`;
