export interface RecepiesFilterProps {
	filterOption: RecepiesFilterOption;
	setFilterOption: (option: RecepiesFilterOption) => void;
}

export interface RecepiesFilterOption {
	sortBy: string;
	cookingTimeFrom: number;
	cookingTimeTo: number;
}
