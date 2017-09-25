import { put, takeEvery, call } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import * as API from './api';
import * as Constants from '../actions/constants';

function* fetchProductTypeGenerator() {
    const payload = yield call(API.fetchProductTypes);
    yield put({
        type: Constants.FETCH_PRODUCT_TYPE_SUCCESS,
        payload
    });
}

function* fetchAProductTypeGenerator(action) {
    try {
        const payload = yield call(API.fetchAProductType, action.payload);
        yield put({
            type: Constants.FETCH_A_PRODUCT_TYPE_SUCCESS,
            payload
        });
    } 
    catch(error) {
        console.log(error);
        yield put({
            type: Constants.PRODUCT_TYPE_ERROR,
            error
        });
    }   
}

function* addProductTypeGenerator(action) {
    try {
        const payload = yield call(API.addProductType, action.payload);
        yield put({
            type: Constants.SAVE_PRODUCT_TYPE_SUCCESS,
            payload
        })
        if (action.onSuccess) {
            action.onSuccess();
        }
    }
    catch(error) {
        console.log(error);
        yield put({
            type: Constants.PRODUCT_TYPE_ERROR,
            error
        });
    }
}

function* updateProductTypeGenerator(action) {
    try {
        const payload = yield call(API.updateProducType, action.payload.id, action.payload.value);
        yield put({
            type: Constants.UPDATE_PRODUCT_TYPE_SUCCESS,
            payload
        });
        if (action.onSuccess) {
            action.onSuccess();
        }
    }
    catch(error) {
        console.log(error);
        yield put({
            type: Constants.PRODUCT_ERROR,
            error
        });
    }
}

function* deleteProductTypeGenerator(action) {
    const {id} = action.payload;
    yield call(API.deleteProductype, id);
    yield put({
        type: Constants.DELETE_PRODUCT_TYPE_SUCCESS,
        payload: {id}
    });
    if (action.onSuccess) {
        action.onSuccess();
    }
}

export const ProductTypeSagas = [
    takeEvery(Constants.USER_FETCH_PRODUCT_TYPE, fetchProductTypeGenerator),
    takeEvery(Constants.USER_FETCH_A_PRODUCT_TYPE, fetchAProductTypeGenerator),
    takeEvery(Constants.USER_SAVE_PRODUCT_TYPE, addProductTypeGenerator),    
    takeEvery(Constants.USER_UPDATE_PRODUCT_TYPE, updateProductTypeGenerator),
    takeEvery(Constants.USER_DELETE_PRODUCT_TYPE, deleteProductTypeGenerator)
];
