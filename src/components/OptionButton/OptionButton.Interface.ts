import React, { Dispatch } from 'react';

export interface OptionButtonProps {
	ItemsButton: ItemButtonProp[];
	isShow: boolean;
	setIsShow: Dispatch<React.SetStateAction<boolean>>;
	handlerMainButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ItemButtonProp {
	text: string;
	onClick: () => void;
}

export interface OptionButtonContainerProps {
	type: 'Recepie' | 'Cookbook' | 'RecepieOwner' | 'CookbookOwner';
	id: string;
}
