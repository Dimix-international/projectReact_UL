import { getCounterValue } from './getCounterValue';
describe('getCounterValue.test', function () {
    var state = {
        counter: {
            value: 10,
        },
    };
    test('', function () {
        expect(getCounterValue(state)).toEqual(10);
    });
});
