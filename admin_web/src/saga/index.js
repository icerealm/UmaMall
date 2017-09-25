import { all } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import { ProductTypeSagas } from './producttype_saga';
import { ProductSagas } from './product_saga';


export default function* rootSaga() {
    yield all([
        ...ProductTypeSagas,
        ...ProductSagas,
    ])
}


