import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
import SvgHidden from '../Svg/SvgHidden';

export const InputStyled = styled.input`
	width: 100%;

	border: 1px solid ${({ theme }) => theme.colors.grayDark};
	border-radius: ${({ theme }) => theme.borderRadiusSmall};
	padding: ${styles.distances.md} ${styles.distances.xl}
		${styles.distances.md} ${styles.distances.sm};

	&:focus {
		outline: none;
	}

	&.error {
		border: 1px solid ${({ theme }) => theme.colors.danger};
	}
`;
export const TextAreaStyled = styled.textarea`
	width: 100%;
	max-width: 100%;
	max-height: 400px;
	min-height: 200px;
	border: 1px solid ${({ theme }) => theme.colors.grayDark};
	border-radius: ${({ theme }) => theme.borderRadiusSmall};
	padding: ${styles.distances.md} ${styles.distances.sm};

	&:focus {
		outline: none;
	}

	&.error {
		border: 1px solid ${({ theme }) => theme.colors.danger};
	}
`;
export const InputHeaderBlock = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textSecondary};
	margin-bottom: ${styles.distances.xs};

	display: flex;
	justify-content: space-between;
`;
export const InputLink = styled(Link)`
	color: ${({ theme }) => theme.colors.primary};
`;
export const InputBlock = styled.div``;
export const InputLabel = styled.label``;
export const InputError = styled.div`
	margin-top: ${styles.distances.xs};
	color: ${({ theme }) => theme.colors.danger};
`;
export const InputWrapper = styled.div`
	width: 100%;
	position: relative;
`;
export const InputHiddenIcon = styled(SvgHidden)`
	position: absolute;
	right: ${styles.distances.md};
	top: 50%;
	transform: translateY(-50%);

	&:hover {
		path {
			fill: ${({ theme }) => theme.colors.textSecondary};
		}
	}

	&.active {
		path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;
