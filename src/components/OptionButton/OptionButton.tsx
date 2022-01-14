import React from 'react';
import SvgOption from '../Svg/SvgOption';
import { OptionButtonProps } from './OptionButton.Interface';
import {
	OptionMainButton,
	OptionShowBlock,
	OptionItem,
	OptionWrapper,
} from './OptionButton.Styled';

const OptionButton = (props: OptionButtonProps) => {
	const { ItemsButton, isShow, setIsShow, handlerMainButton } = props;

	return (
		<OptionWrapper
			onMouseLeave={() => {
				setTimeout(() => {
					setIsShow(!isShow);
				}, 600);
			}}
		>
			<OptionMainButton onClick={handlerMainButton}>
				<SvgOption />
			</OptionMainButton>
			{isShow ? (
				<OptionShowBlock>
					{ItemsButton.map((elem, i) => (
						<OptionItem
							key={i}
							onClick={(e) => {
								e.preventDefault();
								setIsShow(!isShow);
								elem.onClick();
							}}
						>
							{elem.text}
						</OptionItem>
					))}
				</OptionShowBlock>
			) : null}
		</OptionWrapper>
	);
};

export default OptionButton;
