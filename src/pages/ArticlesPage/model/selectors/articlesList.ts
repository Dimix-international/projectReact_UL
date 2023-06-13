import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesListView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const articlesListLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const articlesListError = (state: StateSchema) => state.articlesPage?.error;
