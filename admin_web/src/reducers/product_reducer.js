import _ from 'lodash';
import * as Constants from '../actions/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case Constants.FETCH_PRODUCT_SUCCESS:
            return _.mapKeys(action.payload.data, 'id');
        case Constants.SAVE_PRODUCT_SUCCESS:
            return {...state, [action.payload.data.id]: action.payload.data}
        default:
            return state;
    }
}