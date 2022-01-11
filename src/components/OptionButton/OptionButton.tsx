import React, { useState } from 'react';
import SvgOption from '../Svg/SvgOption';
import { OptionButtonProps } from './OptionButton.Interface';
import {
	OptionMainButton,
	OptionShowBlock,
	OptionItem,
	OptionWrapper,
} from './OptionButton.Styled';

const OptionButton = (props: OptionButtonProps) => {
	const [isShow, setIsShow] = useState(false);

	const { Items } = props;
	const handlerMainButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();
		setIsShow(!isShow);
	};

	return (
		<OptionWrapper>
			<OptionMainButton onClick={handlerMainButton}>
				<SvgOption />
			</OptionMainButton>
			{isShow ? (
				<OptionShowBlock>
					{Items.map((elem, i) => (
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
