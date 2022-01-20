import styled from 'styled-components';

export const ModalWindowPosition = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	display: block;
	z-index: 5;
	overflow: auto;
`;
export const ModalWindowWrapper = styled.div`
	padding: 175px 0;
	opacity: 1;
	position: relative;
`;
export const ModalWindowCloseButton = styled.button`
	margin: 0 auto;
	background: none;
	border: none;

	color: #fff;

	&:hover {
		path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;
export const ModalWindowBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.textMain + '7F'};
	min-height: 100%;
	height: fit-content;
	width: 100%;
`;
export const ModalWindowCloseButtonBlock = styled.div`
	margin: 0 auto;
	width: fit-content;
`;
export const ModalWindowContent = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-top: 85px;
`;
