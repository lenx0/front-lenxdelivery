import axios from "axios";

// const API_URL = 'http://localhost:3100'
const API_URL = 'https://lenxdelivery-api.onrender.com:3100'



export function fetchProducts() {
    return axios(`${API_URL}/v1/lenxdelivery/dish/list`)
}