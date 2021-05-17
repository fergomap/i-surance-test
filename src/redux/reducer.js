import { LOAD_TWEETS, LOAD_TWEETS_SUCCESS, LOAD_TWEETS_ERROR, LOAD_MORE_TWEETS, LOAD_MORE_TWEETS_SUCCESS, LOAD_MORE_TWEETS_ERROR } from './actionTypes';

const initialState = { 
    error: '',
    loading: false,
    query: '',
    tweets: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TWEETS:
            return {
                ...state,
                loading: true,
                query: action.query,
                tweets: []
            };
        case LOAD_MORE_TWEETS:
            return {
                ...state,
                loading: true
            };
        case LOAD_TWEETS_ERROR:
        case LOAD_MORE_TWEETS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case LOAD_TWEETS_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                tweets: action.tweets
            };
        case LOAD_MORE_TWEETS_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                tweets: [...state.tweets, ...action.tweets]
            };
        default:
            return state;
    }
};

export default reducer;
