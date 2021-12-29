import styled from 'styled-components';
import styles from '../../../../constants/stylesProperty';

export const OurChoiceCardImageBackground = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const OurChoiceCardTopShadow = styled.div`
	background: linear-gradient(180deg, #1b1c20 0%, rgba(27, 28, 32, 0) 100%);
	mix-blend-mode: multiply;

	position: absolute;
	top: 0;
	height: 196px;
	width: 100%;
`;
export const OurChoiceCardMoreOption = styled.div`
	position: absolute;
	right: 24px;
	top: 24px;
`;
export const OurChoiceCardButton = styled.button`
	border: none;
	text-align: center;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.textMain};
	background-color: ${({ theme }) => theme.colors.white};
	padding: ${styles.distances.xs} ${styles.distances.lg};
	position: absolute;
	left: 24px;
	bottom: 24px;
	border-radius: ${({ theme }) => theme.borderRadius};
	margin-right: ${styles.distances.lg};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;
export const OurChoiceCardWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: ${({ theme }) => theme.borderRadiusSpecial};
	overflow: hidden;

	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

	&:hover {
		box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);
	}
`;
