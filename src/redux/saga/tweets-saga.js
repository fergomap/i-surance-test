import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOAD_MORE_TWEETS, LOAD_TWEETS } from '../actionTypes';
import { loadTweets } from '../../services/api.service';
import { setTweetsAction, setLoadTweetsErrorAction, setMoreTweetsAction, setLoadMoreTweetsErrorAction } from '../actions';

function* getTweets(action) {
    try {
        const data = yield call(loadTweets, action.query);
        yield put(setTweetsAction(data));
    } catch (error) {
        yield put(setLoadTweetsErrorAction('An error occurred, please try again later!'));
    }
}

function* getMoreTweets(action) {
    try {
        const data = yield call(loadTweets, action.query, action.maxId);
        yield put(setMoreTweetsAction(data));
    } catch (error) {
        yield put(setLoadMoreTweetsErrorAction('An error occurred, please try again later!'));
    }
}

export default function* tweetsSaga() {
    yield takeLatest(LOAD_TWEETS, getTweets);
    yield takeEvery(LOAD_MORE_TWEETS, getMoreTweets);
}
