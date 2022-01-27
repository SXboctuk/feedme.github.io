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
	let handlerShow = setTimeout(() => {
		setIsShow(false);
	}, 1500);
	return (
		<OptionWrapper>
			<OptionMainButton onClick={handlerMainButton}>
				<SvgOption />
			</OptionMainButton>
			{isShow ? (
				<OptionShowBlock
					onMouseLeave={() => {
						handlerShow = setTimeout(() => {
							setIsShow(false);
						}, 600);
					}}
					onMouseOver={() => clearTimeout(handlerShow)}
				>
					{ItemsButton.map((elem, i) => (
						<OptionItem
							key={i}
							onClick={(e) => {
								e.preventDefault();
								setIsShow(false);
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
