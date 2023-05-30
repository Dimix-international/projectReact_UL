import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// createAsyncThunk дженерики
// 1-ый то что возвращаем
// 2 - аргументы
// 3- все параметры (смотри type AsyncThunkConfig ) и их мы можем переопределять
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue : string}>(
    'login/loginByUsername',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post<User>('http://localhost:8000/login', payload);

            if (!data) {
                throw new Error();
            }
            // имитируем хранение токена
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

            thunkAPI.dispatch(userActions.setAuthData(data));

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('authError');
        }
    },
);
