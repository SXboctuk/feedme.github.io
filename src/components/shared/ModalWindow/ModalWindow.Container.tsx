import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '.';

const ModalWindowContainer = (props: React.HTMLProps<HTMLDivElement>) => {
	const navigate = useNavigate();

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
		<ModalWindow handlerShow={handlerShow}>{props.children}</ModalWindow>
	);
};

export default ModalWindowContainer;
