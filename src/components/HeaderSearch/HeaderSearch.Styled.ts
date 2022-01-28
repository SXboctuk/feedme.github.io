import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
import SvgSearch from '../Svg/SvgSearch';

export const InputSearchIcon = styled(SvgSearch)`
	position: absolute;
	z-index: 3;
	top: calc(50% - ${styles.distances.xs});
	left: 15px;
`;
export const InputContainer = styled.div`
	position: relative;
`;
export const InputSuggestionItemWrapper = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.grayDark};
	bottom: 0px;
	transform: translateY(80%);
	padding: ${styles.distances.mdPlus} ${styles.distances.xs}
		${styles.distances.xs} ${styles.distances.xs};
`;
export const InputSuggestionItem = styled(Link)`
	display: block;
	width: 100%;
	padding: ${styles.distances.xs};
	border-radius: ${({ theme }) => theme.borderRadius};
	color: ${({ theme }) => theme.colors.textMain};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;
export const Input = styled.input`
	z-index: 2;
	position: relative;
	height: ${({ height }) => (height ? height : '40px')};
	font-size: ${({ size }) => (size ? size : 'inherit')};
	width: 100%;
	border: none;
	background: ${({ theme }) => theme.colors.gray};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding-left: 39px;

	&:focus {
		outline: none;

		~ ${InputSearchIcon} path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;
