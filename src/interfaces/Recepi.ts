import { IComment } from './Comment';

export interface IRecipe {
	image: string;
	id: string;
	title: string;
	creatorName: string;
	creatorId: string;
	mainText: string;
	cookingTime: number;
	directions: string[];
	ingredients: string[];
	likes: number;
	isLikes: boolean;
	isSaved: boolean;
	views: number;
	comments: IComment[];
}
