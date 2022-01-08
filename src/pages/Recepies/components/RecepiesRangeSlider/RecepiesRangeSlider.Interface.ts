export type RangeOption = { max: number; min: number };

export interface RecepiesRangeSliderProps {
	min: number;
	max: number;
	onChange: (rangeObject: RangeOption) => void;
}
