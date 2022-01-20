import styled from 'styled-components';
import SvgArrowDropmenu from '../../../../components/Svg/SvgArrowDropmenu';
import styles from '../../../../constants/stylesProperty';

export const CookbooksFilterContainer = styled.div`
	padding: ${styles.distances.mdPlus};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	height: fit-content;

	margin-bottom: ${styles.distances.md};
`;

export const CookbooksFilterTopBlock = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CookbooksFilterTitle = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Montserrat';
	color: ${({ theme }) => theme.colors.textMain};
`;

export const CookbooksFilterClearButton = styled.button`
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	border: none;
	background: none;
`;

export const CookbooksFilterDropMenu = styled.div`
	margin-top: ${styles.distances.mdPlus};
`;

export const CookbooksFilterLabel = styled.label`
	display: block;
	margin-bottom: ${styles.distances.md};

	color: ${({ theme }) => theme.colors.textMain};
	font-weight: 600;
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 20px;

	position: relative;
`;
export const CookbooksFilterSelectWrapper = styled.div`
	position: relative;
	margin-bottom: ${styles.distances.mdPlus};
`;

export const CookbooksFilterSvgArrowDropmenu = styled(SvgArrowDropmenu)`
	position: absolute;
	top: 18px;
	right: 20px;
`;
export const CookbooksFilterSelect = styled.select`
	width: 100%;
	padding: 10px 16px;

	border: 2px solid ${({ theme }) => theme.colors.grayDark};
	border-radius: 4px;
	background: none;
	background-image: none;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
`;

export const CookbooksFilterOption = styled.option`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
`;

export const CookbooksFilterCheckbox = styled.div``;

export const CookbooksFilterCheckboxInputWrapper = styled.div`
	&:not(:last-child) {
		margin-bottom: ${styles.distances.xs};
	}
`;
export const CookbooksFilterCheckboxInputWrapperHideMy = styled(
	CookbooksFilterCheckboxInputWrapper,
)`
	margin-top: ${styles.distances.mdPlus};
`;
export const CookbooksFilterCheckboxLabel = styled.label`
	display: inline-flex;
	align-items: center;
	user-select: none;

	&:before {
		content: '';
		display: inline-block;
		width: 1em;
		height: 1em;
		flex-shrink: 0;
		flex-grow: 0;
		border: 1px solid #adb5bd;
		border-radius: 0.25em;
		margin-right: 0.5em;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50% 50%;
	}
`;

export const CookbooksFilterCheckboxInput = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;

	&:checked + label:before {
		border-color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primary};
		background-image: url('../../../../../public/assets/svg/checkboxCheck.svg');
	}
`;
