import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import ProductTypeReducer from './producttype_reducer';
import ProductReducer, { bindataReducer } from './product_reducer';

const rootReducer = combineReducers({
    form: FormReducer,
    productTypes: ProductTypeReducer,
    products: ProductReducer,
    binData: bindataReducer
});

export default rootReducer;