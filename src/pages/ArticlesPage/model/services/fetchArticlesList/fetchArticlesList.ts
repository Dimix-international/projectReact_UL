import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    articlesListPageLimit,
    articlesListPageNumber,
    getArticlesListPageOrder,
    getArticlesListPageSearch,
    getArticlesListPageSort,
    getArticlesListPageType,
} from '../../selectors/articlesList';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const sort = getArticlesListPageSort(getState());
        const order = getArticlesListPageOrder(getState());
        const search = getArticlesListPageSearch(getState());
        const page = articlesListPageNumber(getState());
        const limit = articlesListPageLimit(getState());
        const type = getArticlesListPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });

            const { data } = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
