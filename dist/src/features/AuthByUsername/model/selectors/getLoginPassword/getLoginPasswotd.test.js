import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword.test', function () {
    test('should return password', function () {
        var state = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state)).toEqual('password');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});
