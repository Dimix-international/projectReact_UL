import { createSelector } from '@reduxjs/toolkit';
export var getScrollRestorationScroll = function (state) { return state.scrollRestoration.scroll; };
export var getScrollRestorationByPath = createSelector(getScrollRestorationScroll, // получаем весь объект
function (state, path) { return path; }, // передаем путь (mainPage, aboutPage)
function (scroll, path) { return scroll[path] || 0; });
