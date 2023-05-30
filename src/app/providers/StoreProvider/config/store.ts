import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        // loginForm: loginReducer, //удаляем т.к. он асинхронный
    };

    const reducerManager = createReducerManager(rootReducer);
    // принимает 3 типа
    // 1- тип стора
    // 2 - тип actions
    // 3 - Middlewares
    const store = configureStore<StateSchema>({
        // reducer: rootReducer,
        reducer: reducerManager.reduce, // чтобы добавлялись новые редьюсеры
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
