// ключ адрес страницы а значение позиция скрола
export type ScrollSchema = Record<string, number>

export interface ScrollRestorationSchema {
    scroll: ScrollSchema
}
