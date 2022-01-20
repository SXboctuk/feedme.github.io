import styled from 'styled-components';
import styles from '../../../constants/stylesProperty';

export const ButtonOutline = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	border: 3px solid ${({ theme }) => theme.colors.primary};
	background: none;

	font-weight: bold;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 12px 32px;

	&:hover {
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;
export const ButtonOutlineAdd = styled(ButtonOutline)`
	font-weight: normal;
	font-size: 24px;
	padding: 0;
	width: 40px;
	height: 40px;
`;

export const ButtonSolid = styled.button`
	color: ${({ theme }) => theme.colors.textMain};
	border: none;
	background-color: ${({ theme }) => theme.colors.primary};

	font-weight: bold;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 12px 32px;

	&:hover {
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;
export const ButtonOutlineSend = styled(ButtonSolid)`
	padding: 0 ${styles.distances.lg};
	box-sizing: unset;
	border: 3px solid ${({ theme }) => theme.colors.primary};
	&:hover {
		background: ${({ theme }) => theme.colors.white};
		border: 3px solid ${({ theme }) => theme.colors.primary};

		path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;
export const ButtonWhite = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	border: none;
	background-color: ${({ theme }) => theme.colors.white};
	border: 3px solid ${({ theme }) => theme.colors.white};
	font-weight: bold;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 12px 32px;

	&:hover {
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;
