import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
export const OptionWrapper = styled.div`
	position: relative;
`;
export const OptionMainButton = styled.button`
	border: none;
	background: none;
	&:hover {
		circle {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const OptionShowBlock = styled.div`
	position: absolute;
	right: 50%;
	transform: translateX(50%);
	padding: ${styles.distances.xs};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

	background: ${({ theme }) => theme.colors.white};

	z-index: 4;
`;
export const OptionItem = styled.button`
	border-radius: ${({ theme }) => theme.borderRadius};
	border: none;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	text-align: center;
	color: ${({ theme }) => theme.colors.textMain};
	padding: ${styles.distances.xs};
	white-space: nowrap;
	&:hover {
		background-color: ${({ theme }) => theme.colors.grayDark};
	}
`;
