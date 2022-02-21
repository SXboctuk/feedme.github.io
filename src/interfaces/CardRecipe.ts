export interface CardRecepie {
	id: string;
	viewsCounter: number;
	titleName: string;
	creatorName: string;
	creatorId: string;
	imageSrc: string;
	likesCounter: number;
	isLikes: boolean;
	commentsCounter: number;
	text: string;
	cookingTime: number;
	isSaved: boolean;
}
