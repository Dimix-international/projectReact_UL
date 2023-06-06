import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', function () {
    test('should return username', function () {
        var state = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state)).toEqual('admin');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
