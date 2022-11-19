import { products } from './data.js';
import Product from './Product.js';
import React from 'react';

export default function ProductList() {
    
    const products = this.props.products;
      return products.map(product => (
        <Product
          name={product.name}
          price={product.price}
          productImageUrl={product.productImageUrl}
        />
      ));
    
}
  