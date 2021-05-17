import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOAD_MORE_TWEETS, LOAD_TWEETS } from '../actionTypes';
import { loadMoreTweets, loadTweets } from '../../services/api.service';
import { setTweets, setLoadTweetsError, setMoreTweets, setLoadMoreTweetsError } from '../actions';

function* getTweets(action) {
    try {
        const data = yield call(loadTweets, action.query);
        yield put(setTweets(data));
    } catch (error) {
        yield put(setLoadTweetsError('An error occurred, please try again later!'));
    }
}

function* getMoreTweets(action) {
    try {
        const data = yield call(loadMoreTweets, action.query, action.maxId);
        yield put(setMoreTweets(data));
    } catch (error) {
        yield put(setLoadMoreTweetsError('An error occurred, please try again later!'));
    }
}

export default function* tweetsSaga() {
    yield takeLatest(LOAD_TWEETS, getTweets);
    yield takeEvery(LOAD_MORE_TWEETS, getMoreTweets);
}
