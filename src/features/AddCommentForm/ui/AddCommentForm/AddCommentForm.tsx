import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { addCommentSliceReducer, addCommentSliceActions } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelector';

export interface AddCommentFormProps {
    className?: string;
    onSendComment?: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentSliceReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentSliceActions.setText(value));
    }, [dispatch]);

    const sendCommentHandler = useCallback(() => {
        onSendComment?.(text || '');
        dispatch(addCommentSliceActions.setText(''));
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Enter comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.BACKGROUND} onClick={sendCommentHandler}>
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
