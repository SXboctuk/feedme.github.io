import React, { ChangeEvent } from 'react';
import { RecepiesFilterProps } from './Recepies.Interface';
import {
	RecepiesFilterClearButton,
	RecepiesFilterContainer,
	RecepiesFilterDropMenu,
	RecepiesFilterLabel,
	RecepiesFilterOption,
	RecepiesFilterSelect,
	RecepiesFilterSelectWrapper,
	RecepiesFilterSvgArrowDropmenu,
	RecepiesFilterTitle,
	RecepiesFilterTopBlock,
	RecepiesRangeSliderWrapper,
} from './Recepies.Styled';

import { useTranslation } from 'react-i18next';
import RecepiesRangeSlider from '../RecepiesRangeSlider';
import { initialRecepiesFilterOption } from '../../Recepies';
import { RangeOption } from '../RecepiesRangeSlider/RecepiesRangeSlider.Interface';

const RecepiesFilter = (props: RecepiesFilterProps) => {
	const { t } = useTranslation('common', {
		keyPrefix: 'Filter',
	});

	const { filterOption, setFilterOption } = props;

	const handlerClearAll = () => {
		setFilterOption(initialRecepiesFilterOption);
	};
	const handlerSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilterOption({ ...filterOption, sortBy: e.currentTarget.value });
	};
	const handlerCookingTime = ({ min, max }: RangeOption) => {
		setFilterOption({
			...filterOption,
			cookingTimeFrom: min,
			cookingTimeTo: max,
		});
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
			<RecepiesRangeSliderWrapper>
				<RecepiesFilterLabel>{t('cookingTime')}</RecepiesFilterLabel>
				<RecepiesRangeSlider
					min={0}
					max={240}
					onChange={handlerCookingTime}
				/>
			</RecepiesRangeSliderWrapper>
		</RecepiesFilterContainer>
	);
};

export default RecepiesFilter;
