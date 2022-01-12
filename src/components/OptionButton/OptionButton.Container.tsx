import React, { useState } from 'react';
import OptionButton from '.';
import { OptionButtonContainerProps } from './OptionButton.Interface';

const OptionButtonContainer = (props: OptionButtonContainerProps) => {
	const [isShow, setIsShow] = useState(false);
	const handlerMainButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();
		setIsShow(!isShow);
	};
	const { id, type } = props;

	const OptionButtons: { [name: string]: React.ReactElement } = {
		Recepie: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: 'Recepie',
						onClick: () => console.log('recepie' + id),
					},
				]}
			/>
		),

		Cookbook: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: 'Cookbook',
						onClick: () => console.log('Cookbook' + id),
					},
				]}
			/>
		),

		RecepieOwner: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: 'RecepieOwner',
						onClick: () => console.log('RecepieOwner' + id),
					},
					{
						text: 'RecepieOwner',
						onClick: () => console.log('RecepieOwner' + id),
					},
				]}
			/>
		),

		CookbookOwner: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: 'CookbookOwner',
						onClick: () => console.log('CookbookOwner' + id),
					},
					{
						text: 'CookbookOwner',
						onClick: () => console.log('CookbookOwner' + id),
					},
				]}
			/>
		),
	};

	return OptionButtons[type];
};

export default OptionButtonContainer;
