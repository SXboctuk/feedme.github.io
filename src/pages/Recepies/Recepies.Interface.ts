import { Dispatch } from 'react';
import { CardRecepie } from '../../interfaces/Recepie';

export interface RecepiesFilterOption {
	sortBy: string;
	cookingTimeFrom: number;
	cookingTimeTo: number;
}

export interface RecepiesProps {
	filterOption: RecepiesFilterOption;
	setFilterOption: Dispatch<React.SetStateAction<RecepiesFilterOption>>;
	RecepiesCard: CardRecepie[];
	RecepieById: string | null;
	loading: boolean;
	error: string | null;
}
