import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '.';

const ModalWindowContainer = (props: {
	handlerCloseButton?: () => void;
	children?: React.ReactNode;
}) => {
	const navigate = useNavigate();
	const { handlerCloseButton } = props;
	const handlerShow = () => {
		navigate('../');
	};
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	return (
		<ModalWindow handlerShow={handlerCloseButton || handlerShow}>
			{props.children}
		</ModalWindow>
	);
};

export default ModalWindowContainer;
