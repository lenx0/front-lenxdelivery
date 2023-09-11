import ProductCard from "./ProductCard";
import { checkIsSelected } from "./helpers";
import { Product } from "./types";
import { Skeleton } from "@mui/material";

type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProducts: Product[];
  loading: boolean;
};

export default function ProductsList({
  products,
  onSelectProduct,
  selectedProducts,
  loading,
}: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="product-card-container">
                <Skeleton variant="rectangular" width={230} height={318} />
                <Skeleton width="60%" />
                <Skeleton width="80%" />
                <Skeleton width="40%" />
              </div>
            ))
          : products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onSelectProduct={onSelectProduct}
                isSelected={checkIsSelected(selectedProducts, product)}
              />
            ))}
      </div>
    </div>
  );
}
