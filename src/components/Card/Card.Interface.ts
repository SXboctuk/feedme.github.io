export interface CardProps {
	to: string;
	key: string;
	viewsCounter: number;
	titleName: string;
	creatorName: string;
	imageSrc: string;
	likesCounter?: number;
	commentsCounter?: number;
	fontSizeCreator?: string;
	text?: string;
	isVegatarian?: boolean;
	isWithoutMilk?: boolean;
	isWithoutEggs?: boolean;
	type?: 'wide';
}

export interface StyledCardInnerBlockProps {
	marginBottom?: string;
	marginTop?: string;
	margin?: string;
}

export interface CardCreatorProps {
	fontSizeCreator?: string;
}
