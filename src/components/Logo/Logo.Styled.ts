import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
import { ILink } from '../shared/Link/Link.Interface';

export const LogoText = styled.span<{ fontSize?: string; color?: string }>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
	line-height: 33px;
	font-weight: bold;
	color: ${({ theme, color }) => (color ? color : theme.colors.textMain)};
	margin-left: ${styles.distances.xs};
`;

export const LogoTextPrimary = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

export const LogoLink = styled(Link)<ILink>`
	text-decoration: none;
	display: flex;
	align-items: center;
`;
