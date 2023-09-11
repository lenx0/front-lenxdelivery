export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

export type OrderPayload = {
  products: Product[];
} & OrderLocationData;
