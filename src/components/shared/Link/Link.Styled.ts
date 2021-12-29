import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ILink } from './Link.Interface';

export const LinkStyled = styled(Link)<ILink>`
	font-weight: normal;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
	line-height: 22px;
	color: ${({ color, theme }) => (color ? color : theme.colors.textMain)};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		color: ${({ theme }) => theme.colors.primary};
	}
`;
