import React from 'react';
import {
	RecepiesFilterContainer,
	RecepiesFilterTopBlock,
	RecepiesFilterTitle,
	RecepiesFilterClearButton,
	RecepiesFilterDropMenu,
	RecepiesFilterLaber,
	RecepiesFilterSelect,
	RecepiesFilterOption,
} from './RecepiesFilter.Styled';

const RecepiesFilter = () => {
	return (
		<RecepiesFilterContainer>
			<RecepiesFilterTopBlock>
				<RecepiesFilterTitle>filter</RecepiesFilterTitle>
				<RecepiesFilterClearButton>clear all</RecepiesFilterClearButton>
			</RecepiesFilterTopBlock>
			<RecepiesFilterDropMenu>
				<RecepiesFilterLaber>Sort by</RecepiesFilterLaber>
				<RecepiesFilterSelect>
					<RecepiesFilterOption>filter</RecepiesFilterOption>
				</RecepiesFilterSelect>
			</RecepiesFilterDropMenu>
		</RecepiesFilterContainer>
	);
};

export default RecepiesFilter;
