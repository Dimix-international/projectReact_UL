import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement test', () => {
        const counter: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(counter, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('increment test', () => {
        const counter: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(counter, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
        // 1 -  т.к. дефолтный state = 0
    });
});
