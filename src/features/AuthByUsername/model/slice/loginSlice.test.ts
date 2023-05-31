import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('lalal'),
        )).toEqual({ username: 'lalal' });
    });
});
