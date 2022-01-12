import { RecepiesFilterOption } from '../../Recepies.Interface';

export interface RecepiesFilterProps {
	filterOption: RecepiesFilterOption;
	setFilterOption: (option: RecepiesFilterOption) => void;
}
