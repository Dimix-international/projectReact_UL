import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    // const dispatch = useDispatch();
    //  const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();
    const { t } = useTranslation();

    const incrementValue = useCallback(() => {
        // dispatch(counterActions.increment());
        increment();
    }, [increment]);

    const decrementValue = useCallback(() => {
        // dispatch(counterActions.decrement());
        decrement();
    }, [decrement]);

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incrementValue}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrementValue}>
                {t('decrement')}
            </Button>
        </div>
    );
};
