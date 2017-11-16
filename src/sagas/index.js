import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {throttle} from "redux-saga";

function* getProducts() {
    let products = yield call(() => fetch('http://localhost:4000/products').then(r => r.json()));
    yield put({type: 'GET_PRODUCTS_SUCCESS', products})
}

function* getPosts() {
    let posts = yield call(() => fetch('http://localhost:4000/posts').then(r => r.json()));
    yield put({type: 'GET_POSTS_SUCCESS', posts})
}


function* getComments() {
    let comments = yield call(() => fetch('http://localhost:4000/comments').then(r => r.json()));
    yield put({type: 'GET_COMMENTS_SUCCESS', comments})
}


export function* watchers() {
    yield [takeLatest('GET_PRODUCTS', getProducts),
        takeEvery('GET_POSTS', getPosts),
        throttle(200, 'GET_COMMENTS', getComments)]
}