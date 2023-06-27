import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { TextAlign, TextCustom, TextTheme } from '@/shared/ui/TextCustom/TextCustom';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country/ui/CountrySelect/CountrySelect';
import { Currency, CurrencySelect } from '@/entities/Currency';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly = true,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <TextCustom
                    theme={TextTheme.ERROR}
                    title={t('Occurred something error')}
                    text={t('Please, refresh page!')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])} data-testid="ProfileCard">
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data.avatar}
                            alt="avatar"
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('yourName')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeFirstName}
                    data-testid="ProfileCard.firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('yourLastname')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeLastName}
                    data-testid="ProfileCard.lastname"
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.age}
                    placeholder={t('yourAge')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeAvatar}
                />
                <Input
                    value={data?.city}
                    placeholder={t('yourCity')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeCity}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    readonly={readOnly}
                    onChange={onChangeCountry}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    readonly={readOnly}
                    onChange={onChangeCurrency}
                />
            </div>
        </div>
    );
};
