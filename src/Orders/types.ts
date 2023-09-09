export type Product = {
  _id: string;
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
  _id: string;
};

export type OrderPayload = {
  products: ProductId[];
} & OrderLocationData;
