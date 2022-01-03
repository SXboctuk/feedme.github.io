import styled from 'styled-components';
import SvgArrowDropmenu from '../../../../components/Svg/SvgArrowDropmenu';
import styles from '../../../../constants/stylesProperty';

export const RecepiesFilterContainer = styled.div`
	padding: ${styles.distances.lg};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	height: fit-content;
`;

export const RecepiesFilterTopBlock = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const RecepiesFilterTitle = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Montserrat';
	color: ${({ theme }) => theme.colors.textMain};
`;

export const RecepiesFilterClearButton = styled.button`
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	border: none;
	background: none;
`;

export const RecepiesFilterDropMenu = styled.div`
	margin-top: ${styles.distances.lg};
`;

export const RecepiesFilterLabel = styled.label`
	display: block;
	margin-bottom: ${styles.distances.md};

	color: ${({ theme }) => theme.colors.textMain};
	font-weight: 600;
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 20px;

	position: relative;
`;
export const RecepiesFilterSelectWrapper = styled.div`
	position: relative;
	margin-bottom: ${styles.distances.lg};
`;

export const RecepiesFilterSvgArrowDropmenu = styled(SvgArrowDropmenu)`
	position: absolute;
	top: 18px;
	right: 20px;
`;
export const RecepiesFilterSelect = styled.select`
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

export const RecepiesFilterOption = styled.option`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
`;

export const RecepiesFilterCheckbox = styled.div``;

export const RecepieFilterCheckboxInputWrapper = styled.div`
	&:not(:last-child) {
		margin-bottom: ${styles.distances.xs};
	}
`;
export const RecepieFilterCheckboxInputWrapperHideMy = styled(
	RecepieFilterCheckboxInputWrapper,
)`
	margin-top: ${styles.distances.lg};
`;
export const RecepierFilterCheckboxLabel = styled.label`
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

export const RecepieFilterCheckboxInput = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;

	&:checked + label:before {
		border-color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primary};
		background-image: url('../../../../../public/assets/svg/checkboxCheck.svg');
	}
`;
