import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleSortField, ArticleType, ArticleView, } from 'entities/Article';
import { ARTICLES_VIEW_LOCAL_STORAGE } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
var articlesAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticles = articlesAdapter.getSelectors(function (state) { return state.articlesPage || articlesAdapter.getInitialState(); });
export var articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
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
        setSearch: function (state, action) {
            state.search = action.payload;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE, action.payload);
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        setType: function (state, action) {
            state.type = action.payload;
        },
        initState: function (state) {
            var view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE);
            state.view = view || ArticleView.SMALL;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticlesList.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
                // arg - аргументы которые получаем в asyncThunk
                articlesAdapter.removeAll(state);
            }
        })
            .addCase(fetchArticlesList.fulfilled, function (state, action) {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;
            // проверяем нужно ли получать новые данные или добавлять в конец
            if (action.meta.arg.replace) {
                // arg - аргументы которые получаем в asyncThunk
                articlesAdapter.setAll(state, action.payload);
            }
            else {
                articlesAdapter.addMany(state, action.payload); // добавляем данные
            }
        })
            .addCase(fetchArticlesList.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articlePageActions = articlePageSlice.actions;
export var articlePageReducer = articlePageSlice.reducer;
