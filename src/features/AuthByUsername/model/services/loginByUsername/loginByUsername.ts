import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// createAsyncThunk дженерики
// 1-ый то что возвращаем
// 2 - аргументы
// 3- все параметры (смотри type AsyncThunkConfig ) и их мы можем переопределять
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('common/loginByUsername', async (payload, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
        /* const { data } = await axios.post<User>('http://localhost:8000/login', payload); */
        const { data } = await extra.api.post<User>('/login', payload);

        if (!data) {
            throw new Error();
        }
        // имитируем хранение токена
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

        dispatch(userActions.setAuthData(data));
        // extra.navigate?.('/profile');

        return data;
    } catch (e) {
        return rejectWithValue('authError');
    }
});
