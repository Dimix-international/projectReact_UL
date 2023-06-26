import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ArticleType } from '@/entities/Article/model/constnts/constns';
import {
    getArticlesListPageInited,
} from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesListPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order');
                const sortFromUrl = searchParams.get('sort');
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type');

                dispatch(articlePageActions.setOrder(orderFromUrl ? orderFromUrl as SortOrder : 'asc'));
                dispatch(articlePageActions.setSearch(searchFromUrl || ''));

                dispatch(articlePageActions.setSort(sortFromUrl
                    ? sortFromUrl as ArticleSortField
                    : ArticleSortField.CREATED));

                dispatch(articlePageActions.setType(typeFromUrl
                    ? typeFromUrl as ArticleType
                    : ArticleType.ALL));

                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
