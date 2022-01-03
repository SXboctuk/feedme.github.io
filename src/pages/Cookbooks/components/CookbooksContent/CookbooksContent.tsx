import React from 'react';
import { CookbooksContentProps } from './CookbooksContent.Interface';
import { CookbooksContentMainGrid } from './CookbooksContent.Styled';

const CookbooksContent = (props: CookbooksContentProps) => {
	return (
		<CookbooksContentMainGrid>{props.children}</CookbooksContentMainGrid>
	);
};

export default CookbooksContent;
