import styled from 'styled-components';

export const SectionMainContainer = styled.div`
	margin-top: 84px;
`;
export const SectionNameTitle = styled.div`
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	margin-bottom: 24px;
	color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`;
export const SectionTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	text-align: center;
	margin-bottom: 48px;
`;
export const SectionContent = styled.div`
	width: 100%;
`;
export const SectionButtonCenterWrapper = styled.div`
	text-align: center;
	margin-top: 56px;
`;

export const ContainerBackgroundColor = styled.div`
	padding: 104px 0;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: ${({ theme }) => theme.borderRadius};
	position: relative;
	overflow: hidden;
`;
