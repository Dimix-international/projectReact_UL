import { getCounter } from './getCounter';
describe('getCounter', function () {
    test('should return counter value', function () {
        // проверяем что стэйт вернет нужный нам его участок
        // DeepPartial - не нужно объявлять весь state а только его кусочек
        var state = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
