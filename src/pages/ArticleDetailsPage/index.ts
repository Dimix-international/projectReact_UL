export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export {
    ArticleDetailsCommentsSchema,
} from './model/types/articleDetailsCommentsSchema';
export {
    ArticleDetailsRecommendationSchema,
} from './model/types/articleDetailsRecommendationSchema';
export {
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
