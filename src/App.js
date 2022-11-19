import { products } from './data';
import ProductList from './ProductList';

export default function App() {
    return (
      <div>
        <ProductList products={products} />
      </div>
    );
  }
