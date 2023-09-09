export type Product = {
  _id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

type ProductId = {
  _id: number;
};

export type OrderPayload = {
  products: ProductId[];
} & OrderLocationData;
