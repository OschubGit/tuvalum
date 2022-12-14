import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;
const PRODUCTS_URL = `${API_URL}/products`;

export function getProducts(page, query) {
    return axios.get(`${PRODUCTS_URL}?_page=${page}&_limit=15`);
  }