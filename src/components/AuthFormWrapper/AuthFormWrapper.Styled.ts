import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const AuthFormWrapperStyled = styled.div``;

export const AuthFormTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	margin-top: ${styles.distances.xl};
	color: ${({ theme }) => theme.colors.textMain};
`;

export const AuthFormUnderTitleBlock = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	margin-bottom: ${styles.distances.lg};
`;

export const AuthFormUnderTitleText = styled.span``;

export const AuthFormUnderTitleLink = styled(Link)`
	color: ${({ theme }) => theme.colors.primary};
`;
