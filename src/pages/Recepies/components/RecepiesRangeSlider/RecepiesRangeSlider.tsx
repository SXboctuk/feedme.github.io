import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { RecepiesRangeSliderProps } from './RecepiesRangeSlider.Interface';
import {
    RecepiesInput,
    RecepiesRangeTrack,
    RecepiesSliderBlock,
    RecepiesSliderLeft,
    RecepiesSliderRange,
    RecepiesSliderRight,
    RecepirsRangeSliderContainer,
} from './RecepiesRangeSlider.Styled';

const RecepiesRangeSlider = (props: RecepiesRangeSliderProps) => {
    const { min, max, minVal, maxVal, setMinVal, setMaxVal } = props;
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max],
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    const convertTime = (num: number) => {
        if (num < 1) {
            return '<1 min';
        } else if (num < 60) {
            return num + ' min';
        } else {
            let result = '';
            result = Math.trunc(num / 60).toString();
            if (result === '1') {
                result += ' hour ';
            } else result += ' hours ';

            let minutes = 0;
            minutes = num % 60;
            if (minutes > 0) {
                result += minutes + ' min';
            }

            return result;
        }
    };

    return (
        <RecepirsRangeSliderContainer>
            <RecepiesInput
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
            />
            <RecepiesInput
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
            />

            <RecepiesSliderBlock>
                <RecepiesRangeTrack></RecepiesRangeTrack>
                <RecepiesSliderRange ref={range}></RecepiesSliderRange>
                <RecepiesSliderLeft>{convertTime(minVal)}</RecepiesSliderLeft>
                <RecepiesSliderRight>{convertTime(maxVal)}</RecepiesSliderRight>
            </RecepiesSliderBlock>
        </RecepirsRangeSliderContainer>
    );
};

export default RecepiesRangeSlider;
