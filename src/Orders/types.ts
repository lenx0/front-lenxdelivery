export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUri: string;
  totalPrice: number;
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

export type OrderPayload = {
  products: Product[];
} & OrderLocationData;
