import _ from 'lodash';
import * as Constants from '../actions/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case Constants.FETCH_PRODUCT_TYPE_SUCCESS:
            return _.mapKeys(action.payload.data, 'id');
        case Constants.FETCH_A_PRODUCT_TYPE_SUCCESS:
            return { ...state, [action.payload.data.id]: action.payload.data}
        case Constants.DELETE_PRODUCT_TYPE_SUCCESS:
            return _.omit(state.data, action.payload.id);
        case Constants.SAVE_PRODUCT_TYPE_SUCCESS:
            return { ...state }
        default:
            return state;
    }
}