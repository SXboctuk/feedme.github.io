import React from 'react';
import { IButtonProps } from './Button.Interface';
import { ButtonOutline, ButtonSolid, ButtonWhite } from './Button.Styled';

const Button = (props: IButtonProps) => {
	const { variant, children, ...rest } = props;
	switch (variant) {
		case 'outline':
			return (
				<ButtonOutline
					type={rest.type === 'submit' ? 'submit' : 'button'}
					onClick={rest.onClick}
				>
					{children}
				</ButtonOutline>
			);
		case 'solid':
			return (
				<ButtonSolid
					type={rest.type === 'submit' ? 'submit' : 'button'}
					onClick={rest.onClick}
				>
					{children}
				</ButtonSolid>
			);
		case 'white':
			return (
				<ButtonWhite
					type={rest.type === 'submit' ? 'submit' : 'button'}
					onClick={rest.onClick}
				>
					{children}
				</ButtonWhite>
			);
		default:
			return (
				<ButtonOutline
					type={rest.type === 'submit' ? 'submit' : 'button'}
					onClick={rest.onClick}
				>
					{children}
				</ButtonOutline>
			);
	}
};

export default Button;
