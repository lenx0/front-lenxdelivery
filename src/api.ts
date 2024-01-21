import axios from "axios";
import { OrderPayload } from "./Orders/types";

// const API_URL = 'http://localhost:3100'
const API_URL = "https://lenxdelivery-api.onrender.com";
const mapboxToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN_MAP_BOX;
console.log(mapboxToken);
export function fetchProducts() {
  return axios(`${API_URL}/v1/lenxdelivery/dish/list`);
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${API_URL}/v1/lenxdelivery/order/create`, payload);
}
