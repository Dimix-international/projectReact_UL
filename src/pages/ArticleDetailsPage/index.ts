export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export {
    ArticleDetailsCommentsSchema,
} from './model/types/articleDetailsCommentsSchema';

export {
    getArticleComments,
    articleDetailsCommentsReducer,
} from './model/slices/articleDetailsCommentsSlice';
