import { IComment } from './Comment';

export interface IRecipe {
	image: string;
	id: string;
	title: string;
	creatorName: string;
	creatorId: string;
	mainText: string;
	directions: string[];
	ingredients: string[];
	likes: number;
	views: number;
	comments: IComment[];
}
