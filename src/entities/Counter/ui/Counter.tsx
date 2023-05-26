import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const incrementValue = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    const decrementValue = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={incrementValue}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrementValue}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
