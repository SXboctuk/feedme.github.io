import React from 'react';
import Card from '../../components/shared/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import Spinner from '../../components/shared/Spinner';
import CookbooksFilter from './components/CookbooksFilter';
import { CookbooksProps } from './Cookbooks.Interface';
import { CookbooksContentMainGrid } from './Cookbooks.Styled';
import ContentWrapper from '../../components/ContentWrapper';
import { Outlet } from 'react-router-dom';

const Cookbooks = (props: CookbooksProps) => {
	const { loading, error, filterOption, setFilterOption, CookbooksCard } =
		props;
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<ContentWrapper>
			<ContentSearchTemplate
				leftElem={
					<CookbooksFilter
						filterOption={filterOption}
						setFilterOption={setFilterOption}
					/>
				}
				rightElem={
					loading ? (
						<Spinner />
					) : (
						<CookbooksContentMainGrid>
							{CookbooksCard.map((elem) => {
								return (
									<Card
										to={`${elem.id}`}
										key={elem.id}
										text={elem.text}
										viewsCounter={elem.viewsCounter}
										titleName={elem.titleName}
										creatorName={elem.creatorName}
										imageSrc={elem.imageSrc}
										likesCounter={elem.likesCounter}
										commentsCounter={elem.commentsCounter}
										OptionType={'Cookbook'}
										creatorId={elem.creatorId}
										isLikes={elem.isLikes}
										cardType={'cookbook'}
										isSaved={elem.isSaved}
									/>
								);
							})}
						</CookbooksContentMainGrid>
					)
				}
				selectedPage={'Cookbooks'}
			/>
			<Outlet />
		</ContentWrapper>
	);
};

export default Cookbooks;
