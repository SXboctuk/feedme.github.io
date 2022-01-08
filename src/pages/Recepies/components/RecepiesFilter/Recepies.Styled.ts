import styled from 'styled-components';
import SvgArrowDropmenu from '../../../../components/Svg/SvgArrowDropmenu';
import styles from '../../../../constants/stylesProperty';

export const RecepiesFilterContainer = styled.div`
	padding: ${styles.distances.lg};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	height: fit-content;
	margin-bottom: ${styles.distances.md};
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
export const RecepiesRangeSliderWrapper = styled.div`
	margin-bottom: ${styles.distances.xl};
`;
