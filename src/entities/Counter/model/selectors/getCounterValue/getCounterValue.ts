import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// createSelector - для переиспользования других
// селекторов которые уже есть (reselect)
// и мемоизируется результат пока не измененится
// родительский селект
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
