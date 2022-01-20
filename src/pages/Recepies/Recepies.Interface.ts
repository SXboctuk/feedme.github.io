import { Dispatch } from 'react';
import { CardRecepie } from '../../interfaces/CardRecipe';

export interface RecepiesFilterOption {
	sortBy: string;
	cookingTimeFrom: number;
	cookingTimeTo: number;
}

export interface RecepiesProps {
	filterOption: RecepiesFilterOption;
	setFilterOption: Dispatch<React.SetStateAction<RecepiesFilterOption>>;
	recepiesCard: CardRecepie[];
	recepieId: string | null;
	loading: boolean;
	error: string | null;
	width: number;
}
