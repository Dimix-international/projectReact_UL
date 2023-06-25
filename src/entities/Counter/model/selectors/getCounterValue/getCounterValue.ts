import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';

// createSelector - для переиспользования других
// селекторов которые уже есть (reselect)
// и мемоизируется результат пока не измененится
// родительский селект
/*
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
*/

export const [useCounterValue, getCounterValue] = buildSelector(
    (state: StateSchema) => state.counter.value,
);
// getCounterValue можем использовать в asyncThunk, helpers
// useCounterValue - хук для использования внутри компонента
