import React from 'react';
import SvgClose from '../../Svg/SvgClose';
import {
    ModalWindowCloseButton,
    ModalWindowContent,
    ModalWindowPosition,
    ModalWindowCloseButtonBlock,
    ModalWindowBackground,
    ModalWindowWrapper,
} from './ModalWindow.styled';

const ModalWindow = (props: {
	children: React.ReactNode;
	handlerShow: () => void;
}) => {
    return (
        <ModalWindowPosition>
            <ModalWindowBackground>
                <ModalWindowWrapper>
                    <ModalWindowCloseButtonBlock>
                        <ModalWindowCloseButton onClick={props.handlerShow}>
                            <SvgClose />
                        </ModalWindowCloseButton>
                    </ModalWindowCloseButtonBlock>

                    <ModalWindowContent>{props.children}</ModalWindowContent>
                </ModalWindowWrapper>
            </ModalWindowBackground>
        </ModalWindowPosition>
    );
};

export default ModalWindow;
