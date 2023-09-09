import ProductCard from "./ProductCard"
import { checkIsSelected } from "./helpers";
import { Product } from "./types"

type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProducts: Product[];
};

export default function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  )
}
