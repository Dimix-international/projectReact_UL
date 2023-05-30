import { StateSchema } from 'app/providers/StoreProvider';

// если форма большая то для каждого поля создаем отделный geter
export const getLoginState = (state: StateSchema) => state?.loginForm;
