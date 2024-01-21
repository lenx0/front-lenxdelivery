import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some((item) => item._id === product._id);
}

export default function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
}
