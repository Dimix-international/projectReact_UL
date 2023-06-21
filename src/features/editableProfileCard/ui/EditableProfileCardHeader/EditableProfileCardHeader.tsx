import { useTranslation } from 'react-i18next';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
    readonly: boolean
}

export const EditableProfileCardHeader = memo(({ className, readonly }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <TextCustom title={t('profile')} />
            {
                canEdit && (
                    <div>
                        {readonly
                            ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('edit')}
                                </Button>
                            )
                            : (
                                <HStack gap="8">
                                    <Button
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.BACKGROUND_INVERTED}
                                        onClick={onSave}
                                    >
                                        {t('Save')}
                                    </Button>
                                </HStack>
                            )}
                    </div>
                )
            }
        </HStack>
    );
});
