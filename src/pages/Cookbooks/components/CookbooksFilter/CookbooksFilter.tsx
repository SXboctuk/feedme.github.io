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

import { useTranslation } from 'react-i18next';

const RecepiesFilter = (props: CookbooksFilterProps) => {
	const { t } = useTranslation('common', {
		keyPrefix: 'cookbooksComponent.Filter',
	});

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
				<RecepiesFilterTitle>{t('filterTitle')}</RecepiesFilterTitle>
				<RecepiesFilterClearButton onClick={handlerClearAll}>
					{t('clearAll')}
				</RecepiesFilterClearButton>
			</RecepiesFilterTopBlock>
			<RecepiesFilterDropMenu>
				<RecepiesFilterLabel>{t('sortBy')}</RecepiesFilterLabel>
				<RecepiesFilterSelectWrapper>
					<RecepiesFilterSvgArrowDropmenu />
					<RecepiesFilterSelect onChange={handlerSortBy}>
						<RecepiesFilterOption value="popular">
							{t('optionValuePopular')}
						</RecepiesFilterOption>
						<RecepiesFilterOption value="likes">
							{t('optionValueLikes')}
						</RecepiesFilterOption>
					</RecepiesFilterSelect>
				</RecepiesFilterSelectWrapper>
			</RecepiesFilterDropMenu>
			<RecepiesFilterCheckbox>
				<RecepiesFilterLabel>{t('cookbookType')}</RecepiesFilterLabel>
				<RecepieFilterCheckboxInputWrapper>
					<RecepieFilterCheckboxInput
						onChange={handlerCheckboxVegetarian}
						checked={isVegetarian}
						type="checkbox"
						name="Vegetarian"
						id="Vegetarian"
					/>
					<RecepierFilterCheckboxLabel htmlFor="Vegetarian">
						{t('vegetarian')}
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
						{t('withoutMilk')}
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
						{t('withoutEggs')}
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
						{t('hideMyCookbooks')}
					</RecepierFilterCheckboxLabel>
				</RecepieFilterCheckboxInputWrapperHideMy>
			</RecepiesFilterCheckbox>
		</RecepiesFilterContainer>
	);
};

export default RecepiesFilter;
