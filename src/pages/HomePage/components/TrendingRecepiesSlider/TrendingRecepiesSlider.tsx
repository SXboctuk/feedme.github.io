import React, { useEffect, useState } from 'react';
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

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 1200) {
				setLengthShow(3);
			}
			if (window.innerWidth <= 1200 && window.innerWidth >= 768) {
				setLengthShow(2);
			}
			if (window.innerWidth <= 768) {
				setLengthShow(1);
			}
		}
		window.addEventListener('resize', handleResize);
	}, []);

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
