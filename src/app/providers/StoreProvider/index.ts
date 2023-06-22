import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatchType } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
}
    from './config/StateSchema';

export type { AppDispatchType };
export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};
