import React, { useEffect, useState } from 'react';
import Cookbooks from '.';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CardCookbook } from '../../interfaces/CardCookbook';
import { initialCookbooksFilterOption } from './Cookbooks.Constant';
import { CookbooksFilterOption } from './Cookbooks.Interface';

const CookbooksContainter = () => {
    const [option, setOption] = useState<CookbooksFilterOption>(
        initialCookbooksFilterOption,
    );

    const { loading, error, cookbooks } = useTypedSelector(
        (state) => state.cookbooksReducer,
    );
    const { id } = useTypedSelector((state) => state.userReducer);
    const { fetchCookbook } = useAction();

    useEffect(() => {
        fetchCookbook();
    }, []);

    const filterElems = (): CardCookbook[] => {
        let filterElems: CardCookbook[] = cookbooks || [];

        if (filterElems.length < 1) {
            return filterElems;
        }

        if (option.isVegetarian) {
            filterElems = filterElems.filter(
                (elem) => elem.isVegatarian === true,
            );
        }
        if (option.isWithoutMilk) {
            filterElems = filterElems.filter(
                (elem) => elem.isWithoutMilk === true,
            );
        }
        if (option.isWithoutEggs) {
            filterElems = filterElems.filter(
                (elem) => elem.isWithoutEggs === true,
            );
        }
        if (option.isHideMyCookbooks && id !== null) {
            filterElems = filterElems.filter((elem) => elem.creatorId !== id);
        }

        if (option.sortBy === 'likes') {
            filterElems = filterElems.sort((a, b) => {
                if (
                    typeof a.likesCounter === 'number' &&
					typeof b.likesCounter === 'number'
                ) {
                    return b.likesCounter - a.likesCounter;
                } else return 0;
            });
        } else if (option.sortBy === 'popular') {
            filterElems = filterElems.sort((a, b) => {
                if (
                    typeof a.viewsCounter === 'number' &&
					typeof b.viewsCounter === 'number'
                ) {
                    return b.viewsCounter - a.viewsCounter;
                } else return 0;
            });
        }

        return filterElems;
    };

    return (
        <Cookbooks
            filterOption={option}
            setFilterOption={setOption}
            CookbooksCard={filterElems()}
            loading={loading}
            error={error}
        />
    );
};

export default CookbooksContainter;
