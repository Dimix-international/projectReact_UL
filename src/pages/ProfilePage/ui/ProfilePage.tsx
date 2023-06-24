import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { TextCustom } from '@/shared/ui/TextCustom/TextCustom';
import { Page } from '@/widgets/Page/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <TextCustom text={t('Профиль не найден')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <EditableProfileCard id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
