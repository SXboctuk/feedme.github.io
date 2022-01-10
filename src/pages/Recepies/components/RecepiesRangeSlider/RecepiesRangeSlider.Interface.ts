export type RangeOption = { max: number; min: number };

export interface RecepiesRangeSliderProps {
	minVal: number;
	maxVal: number;
	setMinVal: (a: number) => void;
	setMaxVal: (a: number) => void;
	min: number;
	max: number;
}
