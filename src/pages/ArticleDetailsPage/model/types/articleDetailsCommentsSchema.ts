/* import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema {
    isLoading?: boolean;
    error?: string;
    data?: Comment[],
} */

// нормализация данных - изменения объекта (дублирующего) во всех стейтах
// есть стейт где хранятся все объекты (entities), а в других стейтах, где объекты дублируются хранятся массивы в
// которых не объекты, а id этих объектов, по этому id мы меняем объет и по ссылке он изменится во всех других стейтах
// entities мы храним в объекте, где ключ - id объетка, а значение сам объект - ассоциативный массив - поэтому для
// изменения объекта просто по ключу находим его и меняем необходимые поля

import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
