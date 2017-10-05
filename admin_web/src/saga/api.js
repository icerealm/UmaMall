import axios from 'axios';

export const API_URL = 'http://localhost:8080';


export const fetchProductTypes = () => {
    return axios.get(`${API_URL}/productTypes`);
}

export const fetchAProductType = (id) => {
    return axios.get(`${API_URL}/productTypes/${id}`);
}

export const addProductType = (productType) => {
    return axios.post(`${API_URL}/productTypes`, productType);
}

export const updateProducType = (id, productType) => {
    return axios.put(`${API_URL}/productTypes/${id}`, productType);
}

export const deleteProductype = (id) => {
    return axios.delete(`${API_URL}/productTypes/${id}`);
}

export const fetchProducts = () => {
    return axios.get(`${API_URL}/products`)
}

export const fetchAProduct = () => {
    return axios.get(`${API_URL}/products/${id}`)
}

export const addProduct = (product) => {
    return axios.post(`${API_URL}/products`, product);
}

