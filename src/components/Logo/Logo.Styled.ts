import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ILink } from '../LinkWithStyles/LinkWithStyles.Interface';

export const LogoText = styled.span`
	font-size: 24px;
	line-height: 33px;
	font-weight: bold;
	color: ${({ theme, color }) => (color ? color : theme.colors.textMain)};
	margin-left: 12px;
`;

export const LogoTextPrimary = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

export const LogoLink = styled(Link)<ILink>`
	text-decoration: none;
`;
