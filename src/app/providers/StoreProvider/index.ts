import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatchType } from './config/store';
import type { StateSchema, ReduxStoreWithManager }
    from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatchType,
};
