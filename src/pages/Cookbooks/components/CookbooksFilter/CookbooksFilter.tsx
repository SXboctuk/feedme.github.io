import React, { ChangeEvent } from 'react';
import { initialCookbooksFilterOption } from '../../Cookbooks';
import { CookbooksFilterProps } from './CookbooksFilter.Interface';
import {
	CookbooksFilterContainer,
	CookbooksFilterTopBlock,
	CookbooksFilterTitle,
	CookbooksFilterClearButton,
	CookbooksFilterDropMenu,
	CookbooksFilterLabel,
	CookbooksFilterSelect,
	CookbooksFilterOption,
	CookbooksFilterSelectWrapper,
	CookbooksFilterSvgArrowDropmenu,
	CookbooksFilterCheckbox,
	CookbooksFilterCheckboxInput,
	CookbooksFilterCheckboxInputWrapper,
	CookbooksFilterCheckboxLabel,
	CookbooksFilterCheckboxInputWrapperHideMy,
} from './CookbooksFilter.Styled';

import { useTranslation } from 'react-i18next';

const CookbooksFilter = (props: CookbooksFilterProps) => {
	const { t } = useTranslation('common', {
		keyPrefix: 'Filter',
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
		setFilterOption(initialCookbooksFilterOption);
	};

	return (
		<CookbooksFilterContainer>
			<CookbooksFilterTopBlock>
				<CookbooksFilterTitle>{t('filterTitle')}</CookbooksFilterTitle>
				<CookbooksFilterClearButton onClick={handlerClearAll}>
					{t('clearAll')}
				</CookbooksFilterClearButton>
			</CookbooksFilterTopBlock>
			<CookbooksFilterDropMenu>
				<CookbooksFilterLabel>{t('sortBy')}</CookbooksFilterLabel>
				<CookbooksFilterSelectWrapper>
					<CookbooksFilterSvgArrowDropmenu />
					<CookbooksFilterSelect onChange={handlerSortBy}>
						<CookbooksFilterOption value="popular">
							{t('optionValuePopular')}
						</CookbooksFilterOption>
						<CookbooksFilterOption value="likes">
							{t('optionValueLikes')}
						</CookbooksFilterOption>
					</CookbooksFilterSelect>
				</CookbooksFilterSelectWrapper>
			</CookbooksFilterDropMenu>
			<CookbooksFilterCheckbox>
				<CookbooksFilterLabel>{t('cookbookType')}</CookbooksFilterLabel>
				<CookbooksFilterCheckboxInputWrapper>
					<CookbooksFilterCheckboxInput
						onChange={handlerCheckboxVegetarian}
						checked={isVegetarian}
						type="checkbox"
						name="Vegetarian"
						id="Vegetarian"
					/>
					<CookbooksFilterCheckboxLabel htmlFor="Vegetarian">
						{t('vegetarian')}
					</CookbooksFilterCheckboxLabel>
				</CookbooksFilterCheckboxInputWrapper>
				<CookbooksFilterCheckboxInputWrapper>
					<CookbooksFilterCheckboxInput
						onChange={handlerCheckboxWithoutMilk}
						checked={isWithoutMilk}
						type="checkbox"
						name="Without milk"
						id="WithoutMilk"
					/>
					<CookbooksFilterCheckboxLabel htmlFor="WithoutMilk">
						{t('withoutMilk')}
					</CookbooksFilterCheckboxLabel>
				</CookbooksFilterCheckboxInputWrapper>
				<CookbooksFilterCheckboxInputWrapper>
					<CookbooksFilterCheckboxInput
						onChange={handlerCheckboxWithoutEggs}
						checked={isWithoutEggs}
						type="checkbox"
						name="Without eggs"
						id="WithoutEggs"
					/>
					<CookbooksFilterCheckboxLabel htmlFor="WithoutEggs">
						{t('withoutEggs')}
					</CookbooksFilterCheckboxLabel>
				</CookbooksFilterCheckboxInputWrapper>
				<CookbooksFilterCheckboxInputWrapperHideMy>
					<CookbooksFilterCheckboxInput
						onChange={handlerCheckboxHideMyCookbooks}
						checked={isHideMyCookbooks}
						type="checkbox"
						name="Hide my cookbooks"
						id="HideMyCookbooks"
					/>
					<CookbooksFilterCheckboxLabel htmlFor="HideMyCookbooks">
						{t('hideMyCookbooks')}
					</CookbooksFilterCheckboxLabel>
				</CookbooksFilterCheckboxInputWrapperHideMy>
			</CookbooksFilterCheckbox>
		</CookbooksFilterContainer>
	);
};

export default CookbooksFilter;
