import { useTranslation } from 'react-i18next';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    readOnly: boolean
}

export const ProfilePageHeader = ({ readOnly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setCancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.ProfilePageHeader}>
            <TextCustom title={t('profile')} />
            {
                canEdit && (
                    <div className={cls.btnsWrapper}>
                        {readOnly
                            ? (
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('edit')}
                                </Button>
                            )
                            : (
                                <div className={cls.editBtnsWrapper}>
                                    <Button
                                        className={cls.editBtn}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button
                                        className={cls.editBtn}
                                        theme={ButtonTheme.BACKGROUND_INVERTED}
                                        onClick={onSave}
                                    >
                                        {t('Save')}
                                    </Button>
                                </div>
                            )}
                    </div>
                )
            }
        </div>
    );
};
