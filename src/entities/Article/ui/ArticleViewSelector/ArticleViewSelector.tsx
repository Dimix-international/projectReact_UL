import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IconComponent } from 'shared/ui/IconComponent/IconComponent';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    // т.к. мы передаем новый вид отображения, а event нам не нужен, поэтому делаем функцию
    // которая вернет функцию (замыкание), на верхнем уровне мы принимаем тип, а в onClick передаем вызов функции,
    // которая вернет функцию
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView); // onViewClick - попадем в слушатель события
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <IconComponent
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
