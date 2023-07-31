// import ProductCard from "./ProductCard";
// import { Product } from "./types";

// type Props = {
//   products: Product[];
// };

// export default function ProductsList({ products }: Props) {
//   return (
//     <div className="orders-list-container">
//       <div className="orders-list-items">
//         {products.map((product) => (
//           <ProductCard key={product.code} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

import ProductCard from "./ProductCard";
import { Product } from "./types";
import productsData from "./Products.json"; // Importando o JSON local


export default function ProductsList() {
  // Utilizando os dados do JSON local em vez da API externa
  // products é a prop que você já estava passando para esse componente
  const localProducts = productsData;

  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {localProducts.map((product: Product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
}


