import styled from 'styled-components';

export const ContentSearchTemplateWrapper = styled.div`
	padding-top: 92px;
`;
export const ContentSearchTemplateGrid1x3 = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
`;
export const ContentSearchTemplateRightElem = styled.div`
	width: 100%;
`;
export const ContentSearchTemplateSelectedPageBlock = styled.div`
	display: flex;
	margin-bottom: 40px;
`;
export const ContentSearchTemplateVariant = styled.div`
	font-family: Montserrat;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;

	position: relative;

	&:not(:first-child) {
		margin-left: 32px;
	}

	&[aria-selected] {
		&:after {
			display: block;
			content: '';
			width: 100%;
			height: 2px;
			background: ${({ theme }) => theme.colors.primary};
			border-radius: 10px;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
`;
