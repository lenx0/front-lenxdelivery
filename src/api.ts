import axios from "axios";

// const API_URL = 'http://localhost:3100'
const API_URL = 'https://ec2-18-230-65-121.sa-east-1.compute.amazonaws.com:3100'

export function fetchProducts() {
    return axios(`${API_URL}/v1/lenxdelivery/dish/list`)
}