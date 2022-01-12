import { CookbooksFilterOption } from '../../Cookbooks.Interface';

export interface CookbooksFilterProps {
	filterOption: CookbooksFilterOption;
	setFilterOption: (option: CookbooksFilterOption) => void;
}
