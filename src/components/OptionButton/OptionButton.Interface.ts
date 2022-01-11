export interface OptionButtonProps {
	Items: ItemButtonProp[];
}

export interface ItemButtonProp {
	text: string;
	onClick: () => void;
}
