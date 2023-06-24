import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Article,
} from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCAL_STORAGE } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}

enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [], // массив entity id  - ссылок
        entities: {}, // объект с нормализованными данными
        view: ArticleView.SMALL,
        page: 1,
        limit: 9,
        hasMore: true,
        _inited: false,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setOrder(state, action: PayloadAction<SortOrder>) {
            state.order = action.payload;
        },
        setSort(state, action: PayloadAction<ArticleSortField>) {
            state.sort = action.payload;
        },
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE, action.payload);
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setType(state, action: PayloadAction<ArticleType>) {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE) as ArticleView;
            state.view = view || ArticleView.SMALL;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    // arg - аргументы которые получаем в asyncThunk
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                // проверяем нужно ли получать новые данные или добавлять в конец
                if (action.meta.arg.replace) {
                    // arg - аргументы которые получаем в asyncThunk
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload); // добавляем данные
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
