import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import tweetsSaga from './saga/tweets-saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(tweetsSaga);
