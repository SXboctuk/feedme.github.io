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
import { initialRecepiesFilterOption } from '../../Recepies.Constant';

const RecepiesFilter = (props: RecepiesFilterProps) => {
    const { t } = useTranslation('common', {
        keyPrefix: 'Filter',
    });

    const { filterOption, setFilterOption } = props;

    const min = 0;
    const max = 240;
    const handlerClearAll = () => {
        setFilterOption(initialRecepiesFilterOption);
    };
    const handlerSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterOption({ ...filterOption, sortBy: e.currentTarget.value });
    };
    const setMinValCookingTime = (num: number) => {
        setFilterOption({
            ...filterOption,
            cookingTimeFrom: num,
        });
    };
    const setMaxValCookingTime = (num: number) => {
        setFilterOption({
            ...filterOption,
            cookingTimeTo: num,
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
                    <RecepiesFilterSelect
                        onChange={handlerSortBy}
                        value={filterOption.sortBy}
                    >
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
                    minVal={filterOption.cookingTimeFrom}
                    maxVal={filterOption.cookingTimeTo}
                    setMinVal={setMinValCookingTime}
                    setMaxVal={setMaxValCookingTime}
                    min={min}
                    max={max}
                />
            </RecepiesRangeSliderWrapper>
        </RecepiesFilterContainer>
    );
};

export default RecepiesFilter;
