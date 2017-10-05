import { put, takeEvery, call } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import * as API from './api';
import * as Constants from '../actions/constants';

function* fetchProductGenerator() {
    const payload = yield call(API.fetchProducts);
    yield put({
        type: Constants.FETCH_PRODUCT_SUCCESS,
        payload
    });
}

function* addProductGenerator(action) {
    const payload = yield call(API.addProduct, action.payload);
    yield put({
        type: Constants.SAVE_PRODUCT_SUCCESS,
        payload
    })
    if (action.onSuccess) {
        action.onSuccess();
    }
} 

export const ProductSagas = [
    takeEvery(Constants.USER_FETCH_PRODUCT, fetchProductGenerator),
    takeEvery(Constants.USER_SAVE_PRODUCT, addProductGenerator)
];