import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
import SvgSearch from '../Svg/SvgSearch';

export const InputSearchIcon = styled(SvgSearch)`
	position: absolute;
	top: calc(50% - ${styles.distances.xs});
	left: 15px;
`;
export const InputContainer = styled.div`
	position: relative;

	@media (max-width: ${({ theme }) => theme.displaySize.md}) {
		display: none;
	}
`;
export const Input = styled.input`
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
