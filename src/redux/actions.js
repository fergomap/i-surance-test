import { LOAD_TWEETS, LOAD_TWEETS_SUCCESS, LOAD_TWEETS_ERROR, LOAD_MORE_TWEETS, LOAD_MORE_TWEETS_SUCCESS, LOAD_MORE_TWEETS_ERROR } from './actionTypes';

export const loadTweetsAction = query => ({ type: LOAD_TWEETS, query });
export const setTweetsAction = tweets => ({ type: LOAD_TWEETS_SUCCESS, tweets });
export const setLoadTweetsErrorAction = error => ({ type: LOAD_TWEETS_ERROR, error });
export const loadMoreTweetsAction = (query, maxId) => ({ type: LOAD_MORE_TWEETS, query, maxId });
export const setMoreTweetsAction = tweets => ({ type: LOAD_MORE_TWEETS_SUCCESS, tweets });
export const setLoadMoreTweetsErrorAction = error => ({ type: LOAD_MORE_TWEETS_ERROR, error });
