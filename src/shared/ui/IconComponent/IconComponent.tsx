import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './IconComponent.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const IconComponent = memo((props: IconProps) => {
    const {
        className, Svg, inverted, ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
