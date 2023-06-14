import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesListView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const articlesListLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const articlesListError = (state: StateSchema) => state.articlesPage?.error;

export const articlesListPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const articlesListPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const articlesListPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesListPageInited = (state: StateSchema) => state.articlesPage?._inited;
