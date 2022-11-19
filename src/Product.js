import React from 'react';
import { products } from './data';
import './Product.css';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className='product-details'>
            <div>Product name:{this.props.name}</div>
            <p>price:{this.props.price}</p>
          </div>
        </div>
        <div className='product-image'>
          <img src={this.props.productImageUrl} />
        </div>
      </div>
    );
  }
}