import React, { useEffect, useState } from 'react';
import styles from '../../../../constants/stylesProperty';
import useWindowSize from '../../../../hooks/useWindowSize';
import { TrendingRecepiesSliderProps } from './TrendingRecepiesSlider.Interface';
import {
	TrendingRecepiesSliderContainer,
	TrendingRecepiesSliderWrapper,
	TrendingRecepiesSliderButtonLeft,
	TrendingRecepiesSliderContent,
	TrendingRecepiesSliderButtonRight,
	TrendingRecepiesSliderDotsBlock,
	TrendingRecepiesSliderDot,
} from './TrendingRecepiesSlider.Styled';

const TrendingRecepiesSlider = (props: TrendingRecepiesSliderProps) => {
	const { children } = props;
	const [lengthShow, setLengthShow] = useState<number>(3);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const { width } = useWindowSize();
	useEffect(() => {
		if (width >= parseInt(styles.screenSize.lg)) {
			setLengthShow(3);
		}
		if (
			width <= parseInt(styles.screenSize.lg) &&
			width >= parseInt(styles.screenSize.sm)
		) {
			setLengthShow(2);
		}
		if (width <= parseInt(styles.screenSize.sm)) {
			setLengthShow(1);
		}
	}, [width]);

	const handlerNext = () => {
		setActiveIndex(activeIndex + 1);
	};
	const handlerPrev = () => {
		setActiveIndex(activeIndex - 1);
	};
	const renderChildren = () => {
		let arrayElems: React.ReactNode[] = [];
		for (let i = 0, j = 0; i < lengthShow; i++)
			if (activeIndex + 1 >= children.length) {
				arrayElems = [...arrayElems, children[j++]];
			} else {
				arrayElems = [...arrayElems, children[activeIndex + i]];
			}

		return arrayElems;
	};
	const renderDot = () => {
		switch (activeIndex) {
			case 0:
				return (
					<>
						<TrendingRecepiesSliderDot aria-checked />
						<TrendingRecepiesSliderDot />
						<TrendingRecepiesSliderDot />
					</>
				);
			case children.length - lengthShow:
				return (
					<>
						<TrendingRecepiesSliderDot />
						<TrendingRecepiesSliderDot />
						<TrendingRecepiesSliderDot aria-checked />
					</>
				);
			default:
				return (
					<>
						<TrendingRecepiesSliderDot />
						<TrendingRecepiesSliderDot aria-checked />
						<TrendingRecepiesSliderDot />
					</>
				);
		}
	};
	return (
		<TrendingRecepiesSliderContainer>
			<TrendingRecepiesSliderWrapper>
				{activeIndex === 0 ? (
					<TrendingRecepiesSliderButtonLeft aria-disabled />
				) : (
					<TrendingRecepiesSliderButtonLeft onClick={handlerPrev} />
				)}
				<TrendingRecepiesSliderContent>
					{renderChildren()}
				</TrendingRecepiesSliderContent>
				{activeIndex === children.length - lengthShow ? (
					<TrendingRecepiesSliderButtonRight aria-disabled />
				) : (
					<TrendingRecepiesSliderButtonRight onClick={handlerNext} />
				)}
			</TrendingRecepiesSliderWrapper>
			<TrendingRecepiesSliderDotsBlock>
				{renderDot()}
			</TrendingRecepiesSliderDotsBlock>
		</TrendingRecepiesSliderContainer>
	);
};

export default TrendingRecepiesSlider;
