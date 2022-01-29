import React, { Dispatch } from 'react';
import { CardCookbook } from '../../interfaces/CardCookbook';

export interface CookbooksProps {
	filterOption: CookbooksFilterOption;
	setFilterOption: Dispatch<React.SetStateAction<CookbooksFilterOption>>;
	CookbooksCard: CardCookbook[];
	loading: boolean;
	error: string | null;
}

export interface CookbooksFilterOption {
	sortBy: string;
	isVegetarian: boolean;
	isWithoutMilk: boolean;
	isWithoutEggs: boolean;

	isHideMyCookbooks: boolean;
}
