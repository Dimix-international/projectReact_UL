import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollRestorationScroll = (state: StateSchema) => state.scrollRestoration.scroll;

export const getScrollRestorationByPath = createSelector(
    getScrollRestorationScroll, // получаем весь объект
    (state: StateSchema, path: string) => path, // передаем путь (mainPage, aboutPage)
    (scroll, path) => scroll[path] || 0, // возвращаем значение
);
