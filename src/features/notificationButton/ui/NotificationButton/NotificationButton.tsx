import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { IconComponent } from '@/shared/ui/redesigned/IconComponent/IconComponent';
import { NotificationList } from '@/entities/Notification';
import { useAppDevice } from '@/shared/lib/hooks/useAppDevice/useAppDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpenNotifications, setOpenNotifications] = useState(false);

    const openNotifications = useCallback(() => {
        setOpenNotifications(true);
    }, []);

    const closeNotifications = useCallback(() => {
        setOpenNotifications(false);
    }, []);

    const isMobile = useAppDevice();

    const trigger = (
        <div onClick={openNotifications}>
            <IconComponent Svg={NotificationIcon} />
        </div>
    );

    return (
        <div>
            {!isMobile ? (
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            ) : (
                <>
                    {trigger}
                    <Drawer
                        isOpen={isOpenNotifications}
                        onClose={closeNotifications}
                    >
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </div>
    );
});
