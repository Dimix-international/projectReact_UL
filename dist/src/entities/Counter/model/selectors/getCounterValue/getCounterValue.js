import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
// createSelector - для переиспользования других
// селекторов которые уже есть (reselect)
// и мемоизируется результат пока не измененится
// родительский селект
export var getCounterValue = createSelector(getCounter, function (counter) { return counter.value; });
