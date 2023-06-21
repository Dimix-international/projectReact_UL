import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationReducer, } from './articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
