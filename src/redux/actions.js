import { LOAD_TWEETS, LOAD_TWEETS_SUCCESS, LOAD_TWEETS_ERROR, LOAD_MORE_TWEETS, LOAD_MORE_TWEETS_SUCCESS, LOAD_MORE_TWEETS_ERROR } from './actionTypes';

export const loadTweets = query => ({ type: LOAD_TWEETS, query });
export const setTweets = tweets => ({ type: LOAD_TWEETS_SUCCESS, tweets });
export const setLoadTweetsError = error => ({ type: LOAD_TWEETS_ERROR, error });
export const loadMoreTweets = (query, maxId) => ({ type: LOAD_MORE_TWEETS, query, maxId });
export const setMoreTweets = tweets => ({ type: LOAD_MORE_TWEETS_SUCCESS, tweets });
export const setLoadMoreTweetsError = error => ({ type: LOAD_MORE_TWEETS_ERROR, error });
