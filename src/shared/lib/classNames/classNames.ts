export type Mods = Record<string, boolean | string | undefined>
/* const obj:Mods = {'hovered': true} */

export function classNames(
    cls:string,
    mods: Mods = {},
    additions: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additions.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
}

// cls - главный класс
// mods - объект - ключ название класса а значение boolean флаг
// (если флаг true - класс добавляем, false - удаляем)
// additions - массив доп классов

/*
classNames(
    'remove-btn',
    {hovered: true, selectable: true, red: false},
    ['addClass']
); ---> итог класс 'remove-btn hovered selectable addClass' */
