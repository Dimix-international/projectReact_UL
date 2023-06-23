import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { IconComponent } from 'shared/ui/IconComponent/IconComponent';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <IconComponent Svg={NotificationIcon} inverted />
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
