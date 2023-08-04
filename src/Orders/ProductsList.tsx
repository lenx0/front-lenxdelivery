import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
};

export default function ProductsList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
}

// import ProductCard from "./ProductCard";
// import { Product } from "./types";
// import productsData from "./Products.json";


// export default function ProductsList() {
//   const localProducts = productsData;

//   return (
//     <div className="orders-list-container">
//       <div className="orders-list-items">
//         {localProducts.map((product: Product) => (
//           <ProductCard key={product.code} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }


