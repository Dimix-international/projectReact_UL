import { counterReducer, counterActions } from './counterSlice';
describe('counterSlice', function () {
    test('decrement test', function () {
        var counter = {
            value: 10,
        };
        expect(counterReducer(counter, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment test', function () {
        var counter = {
            value: 10,
        };
        expect(counterReducer(counter, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should work with empty state', function () {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
        // 1 -  т.к. дефолтный state = 0
    });
});
