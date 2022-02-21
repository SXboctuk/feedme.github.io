export interface CardProps {
	cardType: 'recepie' | 'cookbook';
	isLikes: boolean;
	isSaved: boolean;
	to: string;
	viewsCounter: number;
	titleName: string;
	creatorName: string;
	creatorId: string;
	imageSrc: string;
	likesCounter?: number;
	commentsCounter?: number;
	fontSizeCreator?: string;
	text?: string;
	isVegatarian?: boolean;
	isWithoutMilk?: boolean;
	isWithoutEggs?: boolean;
	type?: 'wide';
	noTo?: boolean;
	OptionType: 'Recepie' | 'Cookbook' | 'Hidden';
}

export interface StyledCardInnerBlockProps {
	marginBottom?: string;
	marginTop?: string;
	margin?: string;
}

export interface CardCreatorProps {
	fontSizeCreator?: string;
}
