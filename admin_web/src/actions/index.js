import * as Constants from './constants';

export function fetchProductType() {
    return {
        type: Constants.USER_FETCH_PRODUCT_TYPE
    }
}

export function fetchAProductType(id) {
    return {
        type: Constants.USER_FETCH_A_PRODUCT_TYPE,
        payload: id
    }
}

export function saveProductType(value, onSuccess) {
    return {
        type: Constants.USER_SAVE_PRODUCT_TYPE,
        payload: value,
        onSuccess
    }
}

export function updateProductType(id, value, onSuccess) {
    return {
        type: Constants.USER_UPDATE_PRODUCT_TYPE,
        payload:{id, value},
        onSuccess
    }
}

export function deleteProductType(id, onSuccess) {
    return {
        type: Constants.USER_DELETE_PRODUCT_TYPE,
        payload: {id},
        onSuccess
    }
}

export function fetchProduct() {
    return {
        type: Constants.USER_FETCH_PRODUCT
    }
}

export function fetchAProduct(id) {
    return {
        type: Constants.USER_FETCH_A_PRODUCT,
        payload: id
    }
}

export function saveProduct(value, onSuccess) {
    return {
        type: Constants.USER_SAVE_PRODUCT,
        payload: value,
        onSuccess
    }
}

export function updateProduct(id, value, onSuccess) {
    return {
        type: Constants.USER_UPDATE_PRODUCT_TYPE,
        payload:{id, value},
        onSuccess
    }
}

export function getProductImages(id) {
    return {
        type: Constants.USER_FETCH_BIN_DATA_BY_PRODUCT,
        payload: id
    }
}
