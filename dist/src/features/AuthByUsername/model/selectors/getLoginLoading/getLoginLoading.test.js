import { getLoginLoading } from './getLoginLoading';
describe('getLoginLoading.test', function () {
    test('should return loading true', function () {
        var state = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginLoading(state)).toEqual(false);
    });
});
