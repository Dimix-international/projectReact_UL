import { loginActions, loginReducer } from './loginSlice';
describe('loginSlice.test', function () {
    test('set username', function () {
        var state = { username: 'admin' };
        expect(loginReducer(state, loginActions.setUsername('lalal'))).toEqual({ username: 'lalal' });
    });
});
