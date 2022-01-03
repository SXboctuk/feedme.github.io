import React, { ChangeEvent } from 'react';
import { initialFilterOption } from '../../Cookbooks';
import { CookbooksFilterProps } from './CookbooksFilter.Interface';
import {
	RecepiesFilterContainer,
	RecepiesFilterTopBlock,
	RecepiesFilterTitle,
	RecepiesFilterClearButton,
	RecepiesFilterDropMenu,
	RecepiesFilterLabel,
	RecepiesFilterSelect,
	RecepiesFilterOption,
	RecepiesFilterSelectWrapper,
	RecepiesFilterSvgArrowDropmenu,
	RecepiesFilterCheckbox,
	RecepieFilterCheckboxInput,
	RecepieFilterCheckboxInputWrapper,
	RecepierFilterCheckboxLabel,
	RecepieFilterCheckboxInputWrapperHideMy,
} from './CookbooksFilter.Styled';

const RecepiesFilter = (props: CookbooksFilterProps) => {
	const { setFilterOption, filterOption } = props;
	const {
		isHideMyCookbooks,
		// sortBy,
		isWithoutMilk,
		isWithoutEggs,
		isVegetarian,
	} = filterOption;

	const handlerCheckboxVegetarian = () => {
		setFilterOption({ ...filterOption, isVegetarian: !isVegetarian });
	};
	const handlerCheckboxWithoutMilk = () => {
		setFilterOption({ ...filterOption, isWithoutMilk: !isWithoutMilk });
	};
	const handlerCheckboxWithoutEggs = () => {
		setFilterOption({ ...filterOption, isWithoutEggs: !isWithoutEggs });
	};
	const handlerCheckboxHideMyCookbooks = () => {
		setFilterOption({
			...filterOption,
			isHideMyCookbooks: !isHideMyCookbooks,
		});
	};
	const handlerSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilterOption({ ...filterOption, sortBy: e.currentTarget.value });
	};
	const handlerClearAll = () => {
		setFilterOption(initialFilterOption);
	};

	return (
		<RecepiesFilterContainer>
			<RecepiesFilterTopBlock>
				<RecepiesFilterTitle>Filter</RecepiesFilterTitle>
				<RecepiesFilterClearButton onClick={handlerClearAll}>
					clear all
				</RecepiesFilterClearButton>
			</RecepiesFilterTopBlock>
			<RecepiesFilterDropMenu>
				<RecepiesFilterLabel>Sort by</RecepiesFilterLabel>
				<RecepiesFilterSelectWrapper>
					<RecepiesFilterSvgArrowDropmenu />
					<RecepiesFilterSelect onChange={handlerSortBy}>
						<RecepiesFilterOption value="test1">
							filte asdr
						</RecepiesFilterOption>
						<RecepiesFilterOption value="test2">
							filte asdr
						</RecepiesFilterOption>
						<RecepiesFilterOption value="test3">
							filte asdr
						</RecepiesFilterOption>
					</RecepiesFilterSelect>
				</RecepiesFilterSelectWrapper>
			</RecepiesFilterDropMenu>
			<RecepiesFilterCheckbox>
				<RecepiesFilterLabel>Cookbook type</RecepiesFilterLabel>
				<RecepieFilterCheckboxInputWrapper>
					<RecepieFilterCheckboxInput
						onChange={handlerCheckboxVegetarian}
						checked={isVegetarian}
						type="checkbox"
						name="Vegetarian"
						id="Vegetarian"
					/>
					<RecepierFilterCheckboxLabel htmlFor="Vegetarian">
						Vegetarian
					</RecepierFilterCheckboxLabel>
				</RecepieFilterCheckboxInputWrapper>
				<RecepieFilterCheckboxInputWrapper>
					<RecepieFilterCheckboxInput
						onChange={handlerCheckboxWithoutMilk}
						checked={isWithoutMilk}
						type="checkbox"
						name="Without milk"
						id="WithoutMilk"
					/>
					<RecepierFilterCheckboxLabel htmlFor="WithoutMilk">
						Without Milk
					</RecepierFilterCheckboxLabel>
				</RecepieFilterCheckboxInputWrapper>
				<RecepieFilterCheckboxInputWrapper>
					<RecepieFilterCheckboxInput
						onChange={handlerCheckboxWithoutEggs}
						checked={isWithoutEggs}
						type="checkbox"
						name="Without eggs"
						id="WithoutEggs"
					/>
					<RecepierFilterCheckboxLabel htmlFor="WithoutEggs">
						Without Eggs
					</RecepierFilterCheckboxLabel>
				</RecepieFilterCheckboxInputWrapper>
				<RecepieFilterCheckboxInputWrapperHideMy>
					<RecepieFilterCheckboxInput
						onChange={handlerCheckboxHideMyCookbooks}
						checked={isHideMyCookbooks}
						type="checkbox"
						name="Hide my cookbooks"
						id="HideMyCookbooks"
					/>
					<RecepierFilterCheckboxLabel htmlFor="HideMyCookbooks">
						Hide My Cookbooks
					</RecepierFilterCheckboxLabel>
				</RecepieFilterCheckboxInputWrapperHideMy>
			</RecepiesFilterCheckbox>
		</RecepiesFilterContainer>
	);
};

export default RecepiesFilter;
