export interface CookbooksFilterProps {
	filterOption: CookbooksFilterOption;
	setFilterOption: (option: CookbooksFilterOption) => void;
}

export interface CookbooksFilterOption {
	sortBy: string;
	isVegetarian: boolean;
	isWithoutMilk: boolean;
	isWithoutEggs: boolean;

	isHideMyCookbooks: boolean;
}
