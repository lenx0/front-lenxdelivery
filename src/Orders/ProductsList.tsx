import { useState } from "react"
import ProductCard from "./ProductCard"
import { Product } from "./types"

type Props = {
  products: Product[]
}

export default function ProductsList({ products }: Props) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const handleProductSelection = (product: Product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter(p => p !== product))
    } else {
      setSelectedProducts([...selectedProducts, product])
    }
  }

  console.log("selectedProducts: ", selectedProducts)

  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            isSelected={selectedProducts.includes(product)}
            onSelect={() => handleProductSelection(product)}
          />
        ))}
      </div>
    </div>
  )
}
