import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import ProductTypeReducer from './producttype_reducer';
import ProductReducer from './product_reducer';

const rootReducer = combineReducers({
    form: FormReducer,
    productTypes: ProductTypeReducer,
    products: ProductReducer
});

export default rootReducer;