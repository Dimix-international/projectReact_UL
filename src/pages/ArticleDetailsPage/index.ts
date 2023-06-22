export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export type {
    ArticleDetailsCommentsSchema,
} from './model/types/articleDetailsCommentsSchema';
export type {
    ArticleDetailsRecommendationSchema,
} from './model/types/articleDetailsRecommendationSchema';
export type {
    ArticleDetailsPageSchema,
} from './model/types/index';

export {
    getArticleComments,
    articleDetailsCommentsReducer,
} from './model/slices/articleDetailsCommentsSlice';

export {
    articleDetailsPageRecommendationReducer,
} from './model/slices/articleDetailsPageRecommendationSlice';

export {
    articleDetailsPageReducer,
} from './model/slices/index';
