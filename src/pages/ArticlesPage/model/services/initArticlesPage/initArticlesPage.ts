import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesListPageInited,
} from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesListPageInited(getState());

            if (!inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({ page: 1 }));
            }
        },
    );
