/* import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

// для ts
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        // loginByUsername - создает асинхронный thunk (action)
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);

        // проверим что dispatch был вызван с аргументами
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // проверим что dispatch был вызван 3 раза
        expect(dispatch).toHaveBeenCalledTimes(3);
        // проверим что метод пост был вызван
        expect(mockedAxios.post).toHaveBeenCalled();
        // проверим request status
        expect(result.meta.requestStatus).toBe('fulfilled');
        // проверим payload
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());
        // loginByUsername - создает асинхронный thunk (action)
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('authError');
    });
}); */

import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

// для ts
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        // проверим что dispatch был вызван с аргументами
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // проверим что dispatch был вызван 3 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // проверим что метод пост был вызван
        expect(mockedAxios.post).toHaveBeenCalled();
        // проверим request status
        expect(result.meta.requestStatus).toBe('fulfilled');
        // проверим payload
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // проверим request status
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('authError');
    });
});
