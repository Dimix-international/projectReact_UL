import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { fetchArticleRecommendations, } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; }, // получение id - поле по которому будет идти нормализация данных
});
// для получения комментариев
export var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { var _a; return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) || recommendationsAdapter.getInitialState(); });
var articleDetailsPageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}, // объект с нормализованными данными
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload); // добавляем данные
        })
            .addCase(fetchArticleRecommendations.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articleDetailsPageRecommendationReducer = articleDetailsPageRecommendationSlice.reducer;
