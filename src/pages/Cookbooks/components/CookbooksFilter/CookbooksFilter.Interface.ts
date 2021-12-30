export interface CookbooksFilterProps {
	filterOption: IFilterOption;
	setFilterOption: (option: IFilterOption) => void;
}

export interface IFilterOption {
	sortBy: string;
	isVegetarian: boolean;
	isWithoutMilk: boolean;
	isWithoutEggs: boolean;

	isHideMyCookbooks: boolean;
}
