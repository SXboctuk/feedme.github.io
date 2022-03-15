import React from 'react';
import SvgPaperPlane from '../../Svg/SvgPaperPlane';
import { IButtonProps } from './Button.Interface';
import {
    ButtonOutline,
    ButtonSolid,
    ButtonWhite,
    ButtonOutlineAdd,
    ButtonOutlineSend,
} from './Button.Styled';

const Button = (props: IButtonProps) => {
    const { variant, children, wide, ...rest } = props;

    const buttons: { [name: string]: React.ReactElement } = {
        outline: (
            <ButtonOutline
                type={rest.type === 'submit' ? 'submit' : 'button'}
                onClick={rest.onClick}
                wide={wide ? wide : undefined}
            >
                {children}
            </ButtonOutline>
        ),
        solid: (
            <ButtonSolid
                type={rest.type === 'submit' ? 'submit' : 'button'}
                onClick={rest.onClick}
                wide={wide ? wide : undefined}
            >
                {children}
            </ButtonSolid>
        ),
        white: (
            <ButtonWhite
                type={rest.type === 'submit' ? 'submit' : 'button'}
                onClick={rest.onClick}
                wide={wide ? wide : undefined}
            >
                {children}
            </ButtonWhite>
        ),
        outlineAdd: (
            <ButtonOutlineAdd
                type={rest.type === 'submit' ? 'submit' : 'button'}
                onClick={rest.onClick}
            >
                +
            </ButtonOutlineAdd>
        ),
        solidSend: (
            <ButtonOutlineSend
                type={rest.type === 'submit' ? 'submit' : 'button'}
                onClick={rest.onClick}
            >
                <SvgPaperPlane />
            </ButtonOutlineSend>
        ),
    };
    // const buttons: { [name: string]: React.ReactElement } = {
    // 	outline: renderButton(ButtonOutline),

    // 	solid: renderButton(ButtonSolid),

    // 	white: renderButton(ButtonWhite),

    // 	outlineAdd: renderButton(ButtonOutlineSmall),
    // };

    return buttons[variant];

    // switch (variant) {
    // 	case 'outline':
    // 		return (
    // 			<ButtonOutline
    // 				type={rest.type === 'submit' ? 'submit' : 'button'}
    // 				onClick={rest.onClick}
    // 			>
    // 				{children}
    // 			</ButtonOutline>
    // 		);
    // 	case 'solid':
    // 		return (
    // 			<ButtonSolid
    // 				type={rest.type === 'submit' ? 'submit' : 'button'}
    // 				onClick={rest.onClick}
    // 			>
    // 				{children}
    // 			</ButtonSolid>
    // 		);
    // 	case 'white':
    // 		return (
    // 			<ButtonWhite
    // 				type={rest.type === 'submit' ? 'submit' : 'button'}
    // 				onClick={rest.onClick}
    // 			>
    // 				{children}
    // 			</ButtonWhite>
    // 		);
    // 	default:
    // 		return (
    // 			<ButtonOutline
    // 				type={rest.type === 'submit' ? 'submit' : 'button'}
    // 				onClick={rest.onClick}
    // 			>
    // 				{children}
    // 			</ButtonOutline>
    // 		);
    // }
};

export default Button;
