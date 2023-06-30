export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';

export { UserRole } from './model/consts/consts';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/getUserRoles/getUserRoles';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { useJsonSettings } from './model/selectors/jsonSettings';
export { initAuthData } from './model/services/initAuthData';
